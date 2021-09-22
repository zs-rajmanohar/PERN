const url = process.env.BACKEND_URL;

const proxy = require('http-proxy-middleware');

module.exports = function(app) {

  app.use(proxy('/api/customer', { target: url }))

}