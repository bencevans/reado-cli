const exec = require('child_process').exec
const test = require('tape')

test('runs with stdinput', (t) => {
  t.plan(4)
  exec('cat test-text.txt | ./bin.js', (err, stdout, stderr) => {
    t.error(err)
    t.assert(stdout.match(/score\: [0-9]+/), 'shows score')
    t.assert(stdout.match(/school level\: +/), 'shows school level')
    t.assert(stdout.match(/notes\: .+/), 'shows notes')
  })
})

test('--unfluff', (t) => {
  t.plan(4)
  exec('cat test-html.html | ./bin.js', (err, stdout, stderr) => {
    t.error(err)
    t.assert(stdout.match(/score\: [0-9]+.+/), 'shows score')
    t.assert(stdout.match(/school level\: +/), 'shows school level')
    t.assert(stdout.match(/notes\: .+/), 'shows notes')
  })
})

// test('missing input', (t) => {
//   t.plan(2)
//   console.log('execing')
//   exec('./bin.js', {
//     timeout: 20
//   }, (err, stdout, stderr) => {
//     console.log('bob')
//     t.error(err)
//     console.log(stderr)
//     t.assert(stderr.match(/missing input/))
//   })
// })
