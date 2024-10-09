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
- then the `deploy.yml` [workflow](./workflows/deploy.yml) will be triggered on `prod` push to build and deploy the website on GitHub-pages : https://boly38.github.io/chickenbot-web/.

You can start workflow and follow them under [actions tab](https://github.com/boly38/chickenbot-web/actions).
