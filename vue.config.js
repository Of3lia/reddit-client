module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/reddit-client/'
    : '/',
  outputDir: "docs",
}
