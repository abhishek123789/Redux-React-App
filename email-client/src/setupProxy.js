//Proxy is used so that when from front end we try and give relative address
//It gets targetted to the localhost 5000 and not localhost 3000
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(createProxyMiddleware('/auth/google', {
         target: 'http://localhost:5000/' 
    }))
    app.use(createProxyMiddleware('/auth/google/callback', {
        target: 'http://localhost:5000/' 
    }))
    app.use(createProxyMiddleware('/api/*', {
          target: 'http://localhost:5000/' 
    }))
   //app.use(proxy('/*.svg', { target: 'http://localhost:5000/' }))
}
