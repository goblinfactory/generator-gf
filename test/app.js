'use strict';
var path = require('path');

// var assert = require('yeoman-assert');

var helpers = require('yeoman-test');

describe('generator-gf-page:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('compiles', function () {
    // do nothing...
  });
});
