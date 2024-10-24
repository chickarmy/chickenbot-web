# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
# or
$ npm install
```

### Local Development

```
$ yarn start
# or 
$ npx docusaurus start
# or
$ npm run start -- --locale fr
$ npm run start -- --locale en
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
# or
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Local serve (build)

```
$ npm run serve
```

### Deployment

When some changes has been locally tested, then accepted, and (via pull-request) then merged on `main` branch : 
- you could run GitHub Actions `patch.yml` [workflow](./workflows/patch.yml).
- as result a new version patch is produced on `prod` branch.
- then the `deploy.yml` [workflow](./workflows/deploy.yml) will be triggered on `prod` push to build and deploy the website on GitHub-pages : https://chickarmy.github.io/chickenbot-web/.

You can start workflow and follow them under [actions tab](https://github.com/chickarmy/chickenbot-web/actions).

## HowTo release using Gren

- [releases notes](https://github.com/chickarmy/chickenbot-web/releases)  - generated via `gren` [![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

```bash
# provide PAT with permissions to create release on current repository
export GREN_GITHUB_TOKEN=your_token_here
# one time setup
npm install github-release-notes@latest -g

git fetch --all && git pull

# suppose you have just release v2.2.2 milestone
export VY=v2.2.2
# make a release vY with all history
gren release --data-source=prs -t $VY --milestone-match=$VY

# if you had a previous release
# - your previous release was v2.2.1 milestone
export VX=v2.2.1
# - overrides release vY with history from vY ... to ... vY-1
gren release --data-source=prs -t "$VY".."$VX" --milestone-match="$VY" --override
```
