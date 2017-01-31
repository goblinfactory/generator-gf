# generator-gf [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> goblinfactory default page yeoman generator for various javascript UX libraries, angular2, aurelia and ionic

## Status

I ended up writing this generator for myself as I couldnt find an Ionic2 start page scaffolder (I didn't look very hard so if I've missed something awesome I'll link to that), hopefully this is useful to you. If there's something obvious I've missed out that you were expecting, then please message me and I'll consider adding it. Of course, feel free to fork this project and add it yourself, or chat to me about adding you as a contributor. 

- [If you're looking for an ionic1 generator, go here.](https://github.com/njleonzhang/generator-gulp-ionic)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-gf using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-gf
```

To list the pages types that gf can generate 

```bash
yo gf
```
should output

![list of currently supported frameworks](/notes/yo-gf.png)

The general syntax is `yo gf` followed by `{framework}` plus `{pagename}`. For example, to generate all the placeholder 'customer' pages for an ionic2 mobile app, type `yo gf i2 customer`. This will scaffold three files in a new folder:

* `/customer`
* `/customer/customer.page.html`
* `/customer/customer.page.scss`
* `/customer/customer.page.ts`


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Alan Hemmings](https://about.me/alanhemmings)


[npm-image]: https://badge.fury.io/js/generator-gf.svg
[npm-url]: https://npmjs.org/package/generator-gf
[travis-image]: https://travis-ci.org/goblinfactory/generator-gf.svg?branch=master
[travis-url]: https://travis-ci.org/goblinfactory/generator-gf
[daviddm-image]: https://david-dm.org/goblinfactory/generator-gf.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/goblinfactory/generator-gf
[coveralls-image]: https://coveralls.io/repos/goblinfactory/generator-gf/badge.svg
[coveralls-url]: https://coveralls.io/r/goblinfactory/generator-gf
