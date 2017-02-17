const fsbx = require('fuse-box');

const fuse = fsbx.FuseBox.init({
	homeDir : 'example/',
	outFile : 'example/bundle.js',
	plugins: [
		fsbx.EnvPlugin({ NODE_ENV: 'production' }),
		fsbx.BabelPlugin()
	]
});

fuse.devServer(">app.js");
