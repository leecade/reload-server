# Reload Server

A server that watches file changes. It is designed for seajs reload plugin.

## Install

Install with npm:

    $ sudo npm install reload-server -g


## Usage

At a glance:

    $ reload-server [-p 8000] [path]


- watch the current directory with the default port:

        $ reload-server

- watch the current directory with specified port:

        $ reload-server -p 8080

- watch the specified directory:

        $ reload-server widget/src

- watch the specified directory with specified port:

        $ reload-server lib -p 8080


## Working with SeaJS

This server is designed for seajs reload plugin, but you can write your
own server.

To active seajs reload plugin:

- make sure your page contains seajs (it's seajs plugin, it should work with seajs)

- add query string ``seajs-reload=host:port``, for example:

    - http://seajs.org/doc/?seajs-reload  (equal to ``?seajs-reload=localhost:8080``)
    - http://seajs.org/doc/?seajs-reload=8080
    - http://seajs.org/doc/?seajs-reload=192.168.2.1:8080

    Also working with seajs debug plugin:

    http://seajs.org/doc/?seajs-debug&seajs-reload
   
