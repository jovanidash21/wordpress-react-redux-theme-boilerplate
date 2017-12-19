# WordPress React Redux Theme Boilerplate

## Prerequisite
* [Wordpress](https://wordpress.org/) installed.
* [Node.js](https://nodejs.org/en/) installed.
* [Bower](https://bower.io/) installed.
* [Gulp.js](http://gulpjs.com/) installed.

## Installation
* Clone or download this repository.
```
git clone https://github.com/jovanidash21/wordpress-react-redux-theme-boilerplate.git
```
* Install as a theme on Wordpress.
* Navigate to the project directory.
```
cd wordpress-react-redux-theme-boilerplate
```
* Install node modules.
```
npm install
```
* Install bower dependencies.
```
bower install
```
* Run the project.
```
npm run build
```
* Open with a browser the Wordpress site.
* To use BrowserSync, update the url for dev mode in ```gulp/config.js``` to the local development URL.
* Run in dev mode.
```
npm run dev
```

## WordPress Plugins
* [Advanced Custom Fields](https://www.advancedcustomfields.com/).
* [WP API Menus](https://wordpress.org/plugins/wp-api-menus/).

## Gulp Tasks
* ```gulp``` - clean all the dist directory files and run all build tasks.
* ```gulp --production``` - clean all the dist directory files and run all build tasks for production.
* ```gulp clean``` - clean all the dist directory files.
* ```gulp fonts``` - outputs all fonts in a flattened directory structure.
* ```gulp images``` - minify all images.
* ```gulp views``` - compile all Pug templates into HTML.
* ```gulp views --production``` - compile all Pug templates into HTML for production.
* ```gulp bower``` - inject SCSS bower dependencies automatically.
* ```gulp styles``` - compiles, combines, and optimizes Bower CSS and project CSS.
* ```gulp styles --production``` - compiles, combines, and optimizes bower CSS and project CSS for production.
* ```gulp lint``` -  lints configuration JSON and project JS.
* ```gulp scripts``` -  compiles, combines, and optimizes bower JS and project JS.
* ```gulp scripts --production``` - compiles, combines, and optimizes bower JS and project JS for production.
* ```gulp build``` - run all build tasks.
* ```gulp build --production``` - run all build tasks for production.
* ```gulp watch``` - create a proxy to the dev server and synchronize code changes across devices.

## NPM Scripts
* ```npm run build``` - run the project in production mode.
* ```npm run dev``` - run the project in dev mode.
* ```npm run gulp:prod``` - run the gulp in production mode.
* ```npm run gulp:dev``` - run the gulp in dev mode.
* ```npm run webpack:prod``` - run the webpack in production mode.
* ```npm run webpack:dev``` - run the webpack in dev mode.

## License
Licensed under [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
