const path = require('path');
const rootPath = path.resolve(__dirname, '../src');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  console.log(config);

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          data: `
						@import "@/styles/_base.scss";
						@import "@/styles/components/_all.scss";
					`,
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  //To import static files
  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: './static',
      },
    ]),
  );

  config.resolve.alias['@'] = rootPath;
  config.resolve.alias['~'] = rootPath;

  // Return the altered config
  return config;
};
