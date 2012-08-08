var fs = require('fs')
var socketIO = require('socket.io')
var watchTree = require('watch-tree-maintained')

exports.watch = function(path, port) {
  var io = socketIO.listen(port)
  var watcher = watchTree.watchTree(path, {
      "ignore": "\.git\/*|\.hg\/*|\.svn\/*|~$|\.swp$|\.pyc$|\.pyo$|\.o$",
      "sample-rate": 0.6
  })

  io.sockets.on('connection', function(socket) {
    socket.emit('hello', {version: 0.1})
    watchPath(socket)
  })

  function watchPath(socket) {
    watcher.on('fileModified', function(path, stats) {
      socket.emit('update', {path: path})
      console.info('update', path)
    })
  }
  console.log('watch ' + path + ' on ' + port)
}
