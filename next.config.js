const withSass = require('@zeit/next-sass');
const pathPrefix = process.env.NODE_ENV === 'production' ? '/website' : '';

module.exports = withSass({
  cssModules: true,
  assetPrefix: pathPrefix,
  publicRuntimeConfig: { pathPrefix }
});
