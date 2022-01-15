module.exports = {
	plugins: ['babel-plugin-styled-components', 'react-refresh/babel'],
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
