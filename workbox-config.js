module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{js,css,json,ttf,woff,woff2,eot,jpg,gif,png,svg,webp,jpeg,xcf,php}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^utm/
	]
};