/* eslint-disable global-require */
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const { FAB_BUILD } = process.env;

module.exports = ({ resolvePath, START_DEV_SERVER }) => {
  const serverConfig = {
    target: 'node', // compile for server environment
    entry: FAB_BUILD
      ? ['./src/server/fab-server.js']
      : START_DEV_SERVER
      ? ['webpack/hot/poll?100', './src']
      : ['./src'],
    devtool: false,
    output: {
      path: resolvePath('build'),
      filename: FAB_BUILD ? 'fab-server.js' : 'server.js',
      libraryTarget: FAB_BUILD ? 'commonjs2' : undefined,
    },
    optimization: {
      minimize: false,
    },
    externals: FAB_BUILD
      ? []
      : [
          /**
           * Prevents `node_modules` from being bundled into the server.js
           * And therefore stops `node_modules` being watched for file changes
           */
          nodeExternals({
            whitelist: ['webpack/hot/poll?100'],
          }),
        ],
    watch: !FAB_BUILD,
    node: {
      /**
       * Override webpacks default handling of __dirname
       * which replaces it with '/'.
       */
      __dirname: false,
    },
    plugins: [
      /**
       * Limit chunks to 1 to avoid unnecessary service bundle splitting
       */
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  };

  if (START_DEV_SERVER) {
    const StartServerPlugin = require('start-server-webpack-plugin');
    serverConfig.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new StartServerPlugin('server.js'), // only start the server if we've run `npm run dev`
    ];
  }

  return serverConfig;
};
