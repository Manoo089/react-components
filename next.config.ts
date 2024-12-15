import type { NextConfig } from 'next';
/* eslint-disable */
const globImporter = require('node-sass-glob-importer');
/* eslint-disable */

const nextConfig: NextConfig = {
  reactStrictMode: true,

  sassOptions: {
    importer: globImporter(),
  },
};

export default nextConfig;
