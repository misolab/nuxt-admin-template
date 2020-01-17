# nuxt-admin-template

> A basic nuxt admin template with Element UI

## Built with Vuex & Auth Middleware & Firebase Hosting, Functions & lint

**Live demo:** (https://nuxt-admin-54ad9.web.app)

## This Template Built bassed [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)

\* The current version is `v1.0+` build on `nuxt v^2.0.0` & `element-ui v^2.4.11`.

\* Many thanks for [PanJiaChen](https://github.com/PanJiaChen)

# recommends for vue projects

\* [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)

\* [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

## Build Setup

```bash
# clone the project
git clone https://github.com/AhmdYehia/nuxt-admin-template.git

# enter the project directory
cd nuxt-admin-template

# install dependency
yarn

# develop
yarn dev
```

This will automatically open http://localhost:3000

## Build

```bash
# build for production and launch server
yarn build
yarn start

# generate for static project
yarn generate
```

## deploy firebase hosting

\* change branch to functions

```bash
# clean folders and build to firebase
yarn build:firebase

#publish to firebase hosting
yarn deploy

```

## deploy firebase Auth

add firebase project config to 'modules/nuxt-fire' in nuxt.config.js file

\* using [nuxt-fire](https://github.com/lupas/nuxt-fire)

\* change branch to firebase

```bash
# clean folders and build to firebase


#publish to firebase hosting
yarn deploy

```

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               |

## License

[MIT](https://github.com/AhmdYehia/nuxt-admin-template/blob/master/LICENSE) license.

Copyright (c) 2020-present AhmdYehia
