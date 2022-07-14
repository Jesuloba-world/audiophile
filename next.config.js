/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ["localhost"],
	},
};

module.exports = nextConfig;
