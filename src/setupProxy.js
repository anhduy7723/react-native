const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/register',
    createProxyMiddleware({
      target: 'https://md26bipbip-496b6598561d.herokuapp.com',
      changeOrigin: true,
    })
  );
};
