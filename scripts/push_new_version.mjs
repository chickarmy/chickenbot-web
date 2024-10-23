import {promises as fs} from 'fs';
import path from 'path';
import {exec} from 'child_process';
import {promisify} from 'util';

const execAsync = promisify(exec);

// Define paths
const versionsFilePath = path.join('data', 'versions.json');
const blogTemplatePath = path.join('scripts', 'blog_template.mdx');
const enBlogDirectory = 'blog';
const frBlogDirectory = 'i18n/fr/docusaurus-plugin-content-blog';

// Function to sort versions in descending order
const sortVersions = (a, b) => b.version.localeCompare(a.version);

async function updateVersionsFile(options) {
    const {version, label, label_fr, description, description_fr, note, download} = options
    // Read and parse versions.json
    let versionsData = JSON.parse(await fs.readFile(versionsFilePath, 'utf-8'));
    const previous = versionsData.find(v => v.version === version);
    if (previous) {
        console.log(`remove previous identical version: ${JSON.stringify(previous)}`);
        versionsData = versionsData.filter(e => e.version !== version);
    }

    // Add new version to array
    const newVersion = {version, label, label_fr, description, description_fr, note, download};
    versionsData.push(newVersion);

    // Sort by version and keep only the 3 most recent versions
    const updatedVersions = versionsData.sort(sortVersions).slice(0, 3);

    // Write the updated data back to versions.json
    await fs.writeFile(versionsFilePath, JSON.stringify(updatedVersions, null, 2), 'utf-8');
    console.log('Updated versions.json');
}

async function createBlogPost(template, label, version, description, note, download, date, postPath) {

    let template_en = template
        .replace(/{{version}}/g, version)
        .replace(/{{label}}/g, label)
        .replace(/{{description}}/g, description)
        .replace(/{{note}}/g, note)
        .replace(/{{download}}/g, download)
        .replace(/{{date}}/g, date);
    await fs.writeFile(postPath, template_en, 'utf-8');
    console.log(`Blog post created: ${postPath}`);
}

// Function to generate a new blog entry using the Markdown template
const createBlogPosts = async (options) => {
    const {version, label, label_fr, description, description_fr, note, download} = options;
    const date = new Date().toISOString().split('T')[0];
    const fileName = `${date}-release-${version}.mdx`;

    // Read the template
    const template = await fs.readFile(blogTemplatePath, 'utf-8');

    const enBlogPostPath = path.join(enBlogDirectory, fileName);
    await createBlogPost(template, label, version, description, note, download, date, enBlogPostPath);

    const frBlogPostPath = path.join(frBlogDirectory, fileName);
    await createBlogPost(template, label_fr, version, description_fr, note, download, date, frBlogPostPath);
};

async function execCommitAndPush(version) {
    // Git commit and push to trigger redeployment
    await execAsync('git add .');
    await execAsync(`git commit -m "Add new version ${version} and update versions.json"`);
    await execAsync('git push');
    console.log('Changes committed and pushed to repository');
}

function allAttributesNonEmpty(obj) {
    return Object.values(obj).every(value => value !== null && value !== undefined && value !== '');
}

// Main function to update versions.json and create blog post
const pushNewVersion = async (commitAndPush, {
    version = null,
    label = null, label_fr = null,
    description = null, description_fr = null,
    note = null, download = null
}) => {
    const options = {version, label, label_fr, description, description_fr, note, download};
    if (!allAttributesNonEmpty(options)) {
        throw new Error(`some attribute are missing: ${JSON.stringify(options)}`)
    }
    try {
        await updateVersionsFile(options);
        await createBlogPosts(options);
        if (commitAndPush) {
            await execCommitAndPush(version);
        } else {
            console.log('Changes NOT committed');
        }
    } catch (error) {
        console.error('Error during pushNewVersion:', error);
    }
};

// Example usage: replace these values with your input data
/*
    version: '0.4',
    label: '0.4 new version',
    label_fr: '0.4 nouvelle version',
    description: 'This version.4 is the latest release with new features.',
    description_fr: 'Cette version.4 est la dernière version avec de nouvelles fonctionnalités.',
    note: 'https://github.com/chickarmy/chickenbot-web/releases/tag/v0.0.11',
    download: 'https://github.com/chickarmy/chickenbot-web/releases/download/v0.0.11/package.zip'
*/
// Get arguments from the command line
const args = process.argv.slice(2);
const argMap = args.reduce((acc, val, index, array) => {
    if (val.startsWith('--')) {
        acc[val.slice(2)] = array[index + 1];
    }
    return acc;
}, {});

// Extract arguments
/**
 *           node script/push_new_version.mjs \
 *             --version "v1.2.3" \
 *             --label "my new version" \
 *             ...
 */
const {version, label, label_fr, description, description_fr, note, download, commitAndPush} = argMap;

pushNewVersion(
    commitAndPush !== "false",// default commit
    {version, label, label_fr, description, description_fr, note, download}
);
