export default ({ include, exclude, options }) => ({
  module: {
    rules: [
      {
        include,
        exclude,
        options,

        // Loads config by default from .eslintrc
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
    ],
  },
});
