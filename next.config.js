const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  basePath: '',
  assetPrefix: isProd
    ? 'https://cdn.statically.io/gh/jonwalstedt/jonwalstedt.github.io/gh-pages/'
    : '',
});
