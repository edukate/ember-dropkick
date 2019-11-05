/* jshint node: true */
'use strict';
const BroccoliDebug = require('broccoli-debug');

module.exports = {
  name: 'ember-dropkick',

  included(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/dropkick/dist/dropkick.js');
    app.import(app.bowerDirectory + '/dropkick/dist/dropkick.css');
  }

};
