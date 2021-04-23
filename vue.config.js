module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mdi-search/'
    : '/',
  outputDir: path.resolve(__dirname, './docs'),

}
