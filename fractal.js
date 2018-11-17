'use strict';
const fractal = module.exports = require('@frctl/fractal').create();

// project title
fractal.set('project.title', 'Atomic Package CSS Style Guide');
//components
fractal.components.set('path', __dirname + '/src/components');
// static assets
fractal.web.set('static.path', __dirname + '/public');
// documentation
fractal.docs.set('path', __dirname + '/src/docs');
// build
fractal.web.set('builder.dest', __dirname + '/docs');