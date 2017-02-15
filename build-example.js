const fsbx = require('fuse-box');

const fuse = fsbx.FuseBox.init({
	homeDir : 'example/',
	outFile : 'example/bundle.js',
	// cache: false,
	plugins: [
		fsbx.EnvPlugin({ NODE_ENV: 'production' }),
		fsbx.BabelPlugin()
	]
});

fuse.bundle(">app.js");
