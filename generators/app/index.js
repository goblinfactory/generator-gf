'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var columnify = require('columnify');

module.exports = Generator.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the fabulous Goblinfactory yoyo page generator ' + chalk.red('generator-gf-page')
    ));

    this.log(chalk.yellow('available page types'));
    var data = {
      ionic2: 'yo gf i2 customer',
      angular2: 'n/a yet',
      aurelia: 'n/a yet'
    };

    console.log(columnify(data, {columns: ['MODULE', 'COUNT']}));
  }

});
