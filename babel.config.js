module.exports = {
	plugins: [
		'babel-plugin-styled-components',
		process.env.NODE_ENV === 'development' ? 'react-refresh/babel' : {},
	],
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'usage',
				corejs: '3.20',
				targets: 'defaults',
			},
		],

		[
			'@babel/preset-react',
			{
				runtime: 'automatic',
			},
		],
	],
};
