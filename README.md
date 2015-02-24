Environment:

- OSX 64 bit
- Node.js v0.10.35/Node.js v0.12.0

To run test:

```
npm install
node test.js
```

Expected output: (no exception)

Actual output:

```
Error: Modification to file nested within an ignored directory not ignored! /chokidar-bug/generated/foo.txt
    at EventEmitter.<anonymous> (/chokidar-bug/test.js:49:19)
    at EventEmitter.emit (events.js:95:17)
    at EventEmitter.<anonymous> (/chokidar-bug/node_modules/chokidar/lib/index.js:132:15)
    at EventEmitter.FSWatcher._emit (/chokidar-bug/node_modules/chokidar/lib/index.js:145:5)
    at EventEmitter.<anonymous> (/chokidar-bug/node_modules/chokidar/lib/fsevents-handler.js:167:14)
    at addOrChange (/chokidar-bug/node_modules/chokidar/lib/fsevents-handler.js:172:7)
    at EventEmitter.<anonymous> (/chokidar-bug/node_modules/chokidar/lib/fsevents-handler.js:197:16)
    at filteredListener (/chokidar-bug/node_modules/chokidar/lib/fsevents-handler.js:45:7)
    at /chokidar-bug/node_modules/chokidar/lib/fsevents-handler.js:70:11
    at Array.forEach (native)
```
