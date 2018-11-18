'use strict';
const fractal = module.exports = require('@frctl/fractal').create();
const cssAssetsPath = process.env.NODE_ENV === 'production' ? '/css/css/atomic-package/atomic-package.css' : '/css/atomic-package/atomic-package.css';

// project title
fractal.set('project.title', 'Atomic Package CSS Style Guide');
//components
fractal.components.set('path', __dirname + '/src/components');

fractal.components.set('default.context', {
    'css-assets-path': cssAssetsPath
});

// static assets
fractal.web.set('static.path', __dirname + '/public');
//fractal.web.set('static.mount', 'public/css/atomic-package/atomic-package.css');
// documentation
fractal.docs.set('path', __dirname + '/src/docs');
// build
fractal.web.set('builder.dest', __dirname + '/docs');