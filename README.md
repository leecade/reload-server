# Reload Server

A server that watches file changing. It is designed for seajs reload plugin.

## Install


## Usage

At a glance:

    $ reload-server [-p 8000] [path]


- watch the current directory with the default port:

    $ reload-server

- watch the current directory with specified port:

    $ reload-server -p 8080-

- watch the specified directory:

    $ reload-server widget/src

- watch the specified directory with specified port:

    $ reload-server lib -p 8080


## Working with seajs

This server is designed for seajs reload plugin, but you can write your
own server.

To active seajs reload plugin:

- make sure your page contains seajs (it's seajs plugin, it should work with seajs)
- add query string ``seajs-reload=host:port``, for example:

    1. http://seajs.org/doc/?seajs-reload  (equal to ``?seajs-reload=localhost:8080``)
    2. http://seajs.org/doc/?seajs-reload=8080
    3. http://seajs.org/doc/?seajs-reload=192.168.2.1:8080

    also working with seajs debug plugin:

    http://seajs.org/doc/?seajs-debug&seajs-reload
