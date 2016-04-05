'use strict';

var fs    = require('fs');
var path  = require('path');
var boxup = require('boxup');
var pkg   = require('./package.json');


exports.help = function (command) {
  if (!command || command === true) {
    command = 'help';
  }

  try {
    var filepath = path.join('./doc/', command + '.txt');
    var content  = readFile(filepath);

    console.log(content);
  } catch (e) {
    console.log('"' + command + '" help can\'t be found.\n');
  }
};

exports.version = function () {
  console.log('  v' + pkg.version);
};

exports.render = function (argv) {

};


// helpers
// -------

function readFile(filepath) {
  return fs.readFileSync(path.resolve(__dirname, filepath), 'utf8');
}
