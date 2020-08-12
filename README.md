# nuxt-storyblok-boilerplate

Boilerplate for using VueJS, NuxtJS headless with Storyblok CMS via REST API hosted on Netlify

## To Do

```bash
- [X] Update gitnore (vue,osx,node,nuxt,sass,macos)
- [X] Install SASS deps
- [X] Configure linting + prettier
- [ ] Init testing (jest?)
- [X] Init TypeScript (removed due small scale)
- [X] Markdown Component
- [X] Image optimalisation (compression + rendering)
- [X] Scroll animation / animationtriggering solution (GSAP + Plugins)
- [X] Init Netlify
- [X] SSL redirection (via Netlify)
- [X] Google Analytics
- [X] Connect meta + seo data to StoryBlokCMS
- [X] Init PWA / serviceworker at final stage
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
* Add Storyblok secrets
* Rename title + description in package.json
```

## Netlify Config

```bash
* Add build commants
* Add secrets to env
* If SSR: add Storyblok webhook
```

For detailed explanation on how things work, read [Nuxt docs](https://nuxtjs.org) and [Storyblok docs](https://www.storyblok.com/docs) and [Netlify docs](https://docs.netlify.com/).
