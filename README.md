# nuxt-storyblok-boilerplate

> boilerplate for upcoming projects

## ToDo

```bash
- [X] Update gitnore (vue,osx,node,nuxt,sass,macos)
- [X] Install SASS deps
- [X] Configure linting + prettier
- [ ] Init testing (jest?)
- [X] Init TypeScript
- [X] Markdown Component
- [X] Image optimalisation (compression + rendering)
- [ ] Scroll animation / animationtriggering solution (vanilla/velocity/etc)
- [ ] Init Netlify/Heroku/ZEIT
- [ ] SSL redirection (or via server)
- [X] Google Analytics -> Google gtag
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
```

## Nuxt Config

```bash
* Add Google Tag Manager ID
* Configure responsive-loader by setting image sizes
* Test image serving + resizing (temp set optimizeImagesInDev to true).
```

## Heroku Config

```bash
$ heroku config:set NPM_CONFIG_PRODUCTION=false
$ heroku config:set HOST=0.0.0.0
$ heroku config:set NODE_ENV=production
# Continue to set Google GTM + Storyblok API Keys
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org) and [Storyblok docs](https://www.storyblok.com/docs).
