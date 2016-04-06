![logo.svg](https://cdn.rawgit.com/bubkoo/boxup/28d7fe4/logo.svg)

> Create boxes in the terminal 

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/boxup-cli/blob/master/LICENSE)
[![build:?](https://img.shields.io/travis/bubkoo/boxup-cli/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/boxup-cli)


## Install

```
$npm install --save boxup-cli
```

## Usage

```
  Usage: boxup [options] <line1> <line2> ...


  Options:

  -w, --width num/p.c. .............. the width of the box.
  -a, --text-align align ............ text alignment in the box. left|center|right
  -A, --box-align align ............. the alignment of the box.  left|center|right
  -s, --border-style preset ......... style of the box border.
  -f, --border-color color .......... color of the box border.
  -b, --bg-color color .............. color of the background.
  -m, --margin ...................... set the white space around the box.
  -p, --padding ..................... space between the text and box border.
  -d, --dim-border .................. reduce opacity of the border.
  -h, --help ........................ you're looking at it.
  -h, --help <topic> ................ help on a specific feature.

  Topics: width, color, preset, align. Try "boxup --help color".
  

  Examples:

  $ boxup "I ❤ unicorns"
  $ boxup -w=50 -a=left "A big box"
  $ boxup -s=double-single "double-single"
  $ boxup -m=0 -p=2 "no margin, more padding"
  $ boxup "line 1" "line 2"

```


## Related

- [boxup](https://github.com/bubkoo/boxup) - Wrap content with a box in the terminal
- [boxup-preset](https://github.com/bubkoo/boxup-preset) - Border style presets for [boxup](https://github.com/bubkoo/boxup)
