'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var columnify = require('columnify');

module.exports = Generator.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the fabulous Goblinfactory page generator ' + chalk.red('generator-gf')
    ));

    this.log(chalk.yellow('supported frameworks'));
    var data = [
      {framework: `ionic2`, shortcut: 'i2', example: 'yo gf:i2 customer'},
      {framework: `agular2`, shortcut: ' ', example: 'NA'},
      {framework: `aurelia`, shortcut: ' ', example: 'NA'}
    ];

    console.log(columnify(data, {columns: ['framework', 'shortcut', 'example'], columnSplitter: ' | '}));
    console.log();
  }

});
