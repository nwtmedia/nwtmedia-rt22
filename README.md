# searchbird

Application that gets GIF and Images from multiple data sources

## Installation

- Install dependencies

```bash
$ npm ci
```

#### Parameters file

In order to retrieve data from sources, You need to obtain your secret API key from
[Giphy](https://developers.giphy.com/docs) and [Pixabay](https://pixabay.com/api/docs/).

Next open file `dotenv` and follow the instructions.

## Application

#### Building production ready

```bash
$ npm run build
```

Produces a production-ready bundle in the `/dist` directory with minification for JS/CSS/HTML.

#### Building for developers

```bash
$ npm start
```

Starts a dev server (based on [webpack-dev-server](https://github.com/webpack/webpack-dev-server)) that comes
with Hot-Module-Replacement (HMR) working out of the box.

## Web server

A Web server has been prepared in this project that will allow:

1.  serve static files from `/dist` directory
2.  provides API that enable you to retrieve GIF and images from data sources

There is defined script to run web server

```bash
$ npm run server
```

will starts a dev server (based on [express](https://expressjs.com/)). It uses [nodemon](https://nodemon.io/)
that helps develop node.js applications.

### 1. Serve static files

All files located in `/dist` will be served by web server at [http://localhost:3000/](http://localhost:3000)

### 2. API Reference

API return JSON in the HTTP body and return HTTP response codes to indicate errors.
You can consume the API directly using your favorite HTTP/REST library.

#### Get images

Returns the list of GIF and images with the specified string.

`http://localhost:3000/api?s=image+im+looking+for`

##### PATH PARAMETERS

| name | type   | required | description |     |
| ---- | ------ | -------- | ----------- | --- |
| s    | String | required | Search term |     |

##### Responses

**200 Entities retrieved successfully**

- Content-type: `application/json`
- Content: Array\<Entity\>

```js
/**
 * @typedef {Object} Entity
 * @property {String} url - GIF or image absolute URL
 */
```
