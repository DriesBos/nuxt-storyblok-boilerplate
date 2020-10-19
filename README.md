# nuxt-storyblok-boilerplate

Boilerplate for using NuxtJS with Storyblok CMS.

## Features

```bash
- Storyblok image compression
- Includes markdown component
- Serviceworker module (PWA)
- Secure your secrets by Nuxt runtime config
- SASS
- Auto import CSS variables/mixins/functions
- CSS reset sheet + optional form-reset
- Optional scrollto and lazyload plugins
- Optional depository of filter functions
- Optional GSAP and jQuery
- Optional Google Analytics module
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# Launch lint
$ npm run lint

# Lint fixing
$ npm run lintfix

# NPM vulnerabilities audit
$ npm audit fix
```

## Nuxt Config

```bash
* Add Google Analytics ID
* Add Storyblok secrets to a .env file
* Rename title + description in package.json
```

## Netlify Config

```bash
* Add build command
* Add secrets to variables
* Add Storyblok webhook (generate webhook in the Storyblok settings)
```

For detailed explanation on how things work, read [Nuxt docs](https://nuxtjs.org) and [Storyblok docs](https://www.storyblok.com/docs) and [Netlify docs](https://docs.netlify.com/).
