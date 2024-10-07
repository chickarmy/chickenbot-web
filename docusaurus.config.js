// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Chickenbot-web',
    tagline: 'Chickenbot is cool',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com', // TODO
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'boly38', // Usually your GitHub org/user name.
    projectName: 'chickenbot-web', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en','fr'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/boly38/chickenbot-web/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/boly38/chickenbot-web/tree/main/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            image: 'img/chickenbot-social-card.gif',
            navbar: {
                title: 'Chickenbot',
                logo: {
                    alt: 'Chicken Logo',
                    src: 'img/chicken-logo.svg',
                },
                items: [
                    {type: 'localeDropdown'},
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Chicken Doc',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/boly38/chickenbot-web',
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository',
                    },
                    {
                        type: 'search',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {label: 'Intro', to: '/docs/intro'},
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/chickenbot'},
                            // {label: 'Discord',href: 'https://discordapp.com/invite/docusaurus'},
                            // {label: 'Twitter',href: 'https://twitter.com/docusaurus'},
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {label: 'Blog', to: '/blog'},
                            {label: 'GitHub', href: 'https://github.com/boly38/chickenbot-web'},
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} chickenbot-web, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            colorMode: {
                defaultMode: 'dark',
                respectPrefersColorScheme: true,
            }
            /*
            ,announcementBar: {
                id: 'support_us',
                content:
                    'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
                backgroundColor: '#fafbfc',
                textColor: '#091E42',
                isCloseable: false,
            },
             */
        },
    plugins: [[ require.resolve('docusaurus-lunr-search'), {
        languages: ['en', 'fr'] // language codes
    }]],
};

export default config;