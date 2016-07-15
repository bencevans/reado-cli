# reado-cli [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard) [![Travis](https://img.shields.io/travis/bencevans/reado-cli.svg?style=flat-square)](https://travis-ci.org/bencevans/reado-cli) [![Coveralls](https://img.shields.io/coveralls/bencevans/reado-cli.svg?style=flat-square)](https://coveralls.io/github/bencevans/reado-cli)


> Command Line Readability Meter

## Install

    $ npm install --global reado-cli

## Usage

    $ reado [--unfluff]

* `--unfluff` strips HTML tags, just grabs content

**Check a text file**

    $ cat final-report.txt | reado
    score: 43.14897959183676
    schoolLevel: college
    notes: Difficult to read.

**Check a webpage**

    $ curl -s http://www.bbc.co.uk/news/business-36437445 | reado --unfluff
    score: 59.67055983930541
    schoolLevel: 10th to 12th grade
    notes: Fairly difficult to read.

## Licence

MIT
