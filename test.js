var chokidar = require('chokidar');
var nodePath = require('path');
var fs = require('fs');

var generatedDir = nodePath.join(__dirname, 'generated');
var nodeModulesDir = nodePath.join(__dirname, 'node_modules');
var gitDir = nodePath.join(__dirname, '.git');

try {
    fs.mkdirSync(generatedDir);
} catch(e) {}

var events = [
    'add',
    'addDir',
    'change',
    'unlink',
    'unlinkDir'
];

var watcher = chokidar.watch(
    __dirname,
    {
        ignored: function(path) {
            var ignored = false;

            if (path === generatedDir) {
                ignored = true;
            } else if (path === nodeModulesDir) {
                ignored = true;
            } else if (path === gitDir) {
                ignored = true;
            }

            console.log('IGNORE ' + path + '?: ' + ignored);

            return ignored;
        },
        persistent: true,
        ignoreInitial: true
    });

events.forEach(function(event) {
    watcher.on(event, function(path) {
        console.log('File modified (' + event + '): ' + path);

        var dirname = nodePath.dirname(path);
        if (dirname === generatedDir) {
            throw new Error('Modification to file nested within an ignored directory not ignored! ' + path);
        }
    });
});

setTimeout(function() {
    fs.writeFileSync(nodePath.join(generatedDir, 'foo.txt'), 'foo', 'utf8');
}, 100);