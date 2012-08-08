#!/usr/bin/env node

var server = require('../')

function helpMessage() {
  var lines = [
    'Usage:',
    '  reload-server [-p 8000] [path]',
    '',
    'Options:',
    '  -p, --port=<port>    listen on port',
    '  -h, --help           display this message',
    '',
    'Examples:',
    '  $ reload-server',
    '  $ reload-server lib -p 8080'
  ]
  console.log(lines.join('\n'))
}

function main(argv) {
  var path = '.', port = 8000

  function getArg() {
    var args = argv.shift()
    args = args.split('=')
    if (args.length > 1) {
      argv.unshift(args.slice(1).join('='))
    }
    return args[0]
  }

  var arg
  while (argv.length) {
    arg = getArg()
    switch(arg) {
      case '-p':
      case '--port':
        port = argv.shift()
        break
      case '-h':
      case '--help':
        helpMessage()
        process.exit(0)
        break
      default:
        path = arg
        break
    }
  }

  if (path == process.argv[1]) {
    path = '.'
  }

  port = parseInt(port, 10)
  server.watch(path, port)
}

main(process.argv.slice())
