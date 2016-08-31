#!/usr/bin/env node

var actions = require('../index');

var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    w: 'width',
    a: ['text-align', 'textAlign'],
    A: ['box-align', 'boxAlign'],
    s: ['border-style', 'borderStyle', 'style'],
    f: ['border-color', 'borderColor', 'color'],
    b: ['background-color', 'backgroundColor', 'bgColor', 'bg'],
    d: ['dim-border', 'dimBorder', 'dim'],
    m: 'margin',
    p: 'padding',
    h: 'help',
    V: 'version'
  },
  string: [
    'text-align',
    'box-align',
    'border-style',
    'border-color',
    'background-color'
  ],
  boolean: [
    'dim-border',
    'version'
  ],
  default: {
    w: 'auto',
    a: 'center',
    A: 'left',
    s: 'single',
    m: 1,
    p: 1,
    d: false
  }
});

if (argv.help) {
  return actions.help(argv.help);
}

if (argv.version) {
  return actions.version();
}

actions.render(argv);
