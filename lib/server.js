var fs = require('fs')
var socketIO = require('socket.io')
var watchTree = require('watch-tree')

exports.server = function(path, port) {
  var io = socketIO.listen(port)
  var watcher = watchTree.watchTree(path, {
      ignore: "~$|\\.swp$|\\.pyc|\\.pyo|\\.o"
  })

  io.sockets.on('connection', function(socket) {
    socket.emit('hello', {version: 0.1})
    watchPath(socket)
  })

  function watchPath(socket) {
    watcher.on('fileModified', function(path) {
      socket.emit('update', {path: path})
    })
  }
}
