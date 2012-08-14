
exports.start = function(path, port) {
  var io = require('socket.io').listen(port)

  var watcher = require('watch-tree-maintained').watchTree(path, {
      "ignore": "^\.|~$|\.swp$|\.pyc$",
      "sample-rate": 0.6
  })

  io.sockets.on('connection', function(socket) {
    socket.emit('hello', { message: 'world' })
    watchPath(socket)
  })

  function watchPath(socket) {
    watcher.on('fileModified', function(path) {
      socket.emit('update', { path: path })
      console.info('Update ', path)
    })
  }

  console.log('Watching ' + path + ' on ' + port)
}
