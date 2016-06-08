#!/usr/bin/env node

const meter = require('readability-meter')
const minitmist = require('minimist')
const unfluff = require('unfluff')
const getStdin = require('get-stdin');

const argv = require('minimist')(process.argv.slice(2));

getStdin().then(str => {

  if (argv.unfluff) {
    str = unfluff(str).text
    console.log(str)
  }

  var report = meter.ease(str)

  console.log([
    'score: ' + Math.round(report.score * 100) / 100,
    'school level: ' + report.schoolLevel,
    'notes: ' + report.notes,
    ''
  ].join('\n'))
})
