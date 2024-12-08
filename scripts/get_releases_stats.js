import {Octokit} from "@octokit/rest";

const auth = null;//'your_github_token'
const octokit = new Octokit({auth});

async function getReleaseStats() {
    const {data: releases} = await octokit.repos.listReleases({
        owner: 'chickarmy',
        repo: 'chickenbot-web',
    });

    releases.forEach(release => {
        console.log(`Release: ${release.name}`);
        release.assets.forEach(asset => {
            console.log(`- Asset: ${asset.name}, Downloads: ${asset.download_count}`);
        });
    });
}

getReleaseStats();