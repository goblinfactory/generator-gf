# generator-gf [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> goblinfactory default page yeoman generator for various javascript UX libraries, angular2, aurelia and ionic

## Status

I ended up writing this generator for myself as I couldnt find an Ionic2 start page scaffolder (I didn't look very hard so if I've missed something awesome I'll link to that), hopefully this is useful to you. If there's something obvious I've missed out that you were expecting, then please message me and I'll consider adding it. Of course, feel free to fork this project and add it yourself, or chat to me about adding you as a contributor. 

- currently only ionic2 is supported. 
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

## default page type 

The default page type for each framework (e.g. `i2`) will be the most commonly created placeholder page for each framework. 

## roadmap - advanced page types

Ideas for now. I know the form builder is a bold idea and is a rabbit hole I could dissapear into for months, so will treat this list as 'inspiration only'. The reality is that I'll update `generator-gf` on a real need basis, as I am currently use it myself on a daily basis. I'm not going to build anything unless I need it, which will result in some odd omissions (from your perspective) since I'm not building a general tool, it's very specific to my needs. (of course, volunteers welcome ;-D )

* I will be updating `gf` with additional sub types using a dot notation, e.g.
 - `i2.list` (for infinite scroll list with pull to refresh)
 - `i2.listform` (list and an edit form)
* Advanced sub type generators will end with `.q`. This will result in a few Q & A type generator questions (in the shell) allowing you to customise the generated pages using the traditional `yo` wizard style. 
 - `i2.list.q` 
 - `i2.listform.q` (very simple list and form builder, with options to specify fields and types, e.g. Name*, Surname*, Age, Email )

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## Special thanks

Special thanks to (Pascal Hartig)(https://github.com/passy) for writing the [generator-generator](https://github.com/yeoman/generator-generator) that I used to kick start this generator project. Gosh, Pascal is a serious open source addict, 1500 contributions in the last year, Yikes! #Kudos and of course #quitejealous ;-D 

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
