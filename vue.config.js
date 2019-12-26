module.exports = {
    // options...
    publicPath: process.env.NODE_ENV === 'production' ? '/redsky/blog/' : '/',
    devServer: { proxy: 'https://api.hnpwa.com/' }
  
  }