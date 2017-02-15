const fsbx = require('fuse-box');

const fuse = fsbx.FuseBox.init({
	homeDir : 'src/',
	outFile : 'lib/react-image-zoom.js',
	cache: false,
	package:`react-image-zoom`,
    globals: { 'react-image-zoom': 'react-image-zoom' },
	plugins: [
		fsbx.EnvPlugin({ NODE_ENV: 'production' }),
		fsbx.BabelPlugin()
	]
});

fuse.bundle(">react-image-zoom.js");
