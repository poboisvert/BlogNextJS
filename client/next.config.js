const withPWA = require('next-pwa');
// https://github.com/GoogleChrome/workbox/issues/1790
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
    dest: 'public',
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
  webpack5: true,
  pageExtensions: ['tsx'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = { fs: false };
    // SVG fixes
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: 'json',
          use: 'yaml-loader',
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
      ]
    );
    return config;
  },
});
