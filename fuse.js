const fsbx = require('fuse-box');

const fuse = fsbx.FuseBox.init({
  package: 'reactImageZoom',
  homeDir : 'src/',
  outFile : './react-image-zoom.js',
  globals: { default: 'reactImageZoom' },
  cache: false,
  plugins: [
    fsbx.BabelPlugin()
  ]
});

fuse.bundle(">/react-image-zoom.js [**/*.js]");