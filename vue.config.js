module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/' + process.env.CI_PROJECT_NAME + '/' : '/'  //This code is required to deploy to Gitlab Pages
}