process.env.REACT_APP_DIRNAME = __dirname

module.exports = {
  webpack: {
    configure: {
      devtool: 'eval-source-map',
    },
  },
};
