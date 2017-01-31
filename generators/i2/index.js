var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.log('goblinfactory ionioc2 page generator');
    this.argument('pagename', {type: String, required: false, default: 'demo'});
    this.argument('verbose', {type: String, required: false});
  }

  createFiles() {
    let name = this.options.pagename;
    this.fs.copyTpl(this.templatePath('name.page.html'), this.destinationPath(`${name}/${name}.page.html`), {name: name});
    this.fs.copyTpl(this.templatePath('name.page.scss'), this.destinationPath(`${name}/${name}.page.scss`), {name: name});
    this.fs.copyTpl(this.templatePath('name.page.ts'), this.destinationPath(`${name}/${name}.page.ts`), {name: name});
  }

};

// references
// http://yeoman.io/authoring/
