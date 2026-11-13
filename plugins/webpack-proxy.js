// CORRECT SYNTAX (Wrapped in an array)
// plugins/webpack-proxy.js

module.exports = function (context, options) {
    return {
      name: 'custom-webpack-proxy',
      configureWebpack(config, isServer) {
        if (!isServer) {
          return {
            // This tells Docusaurus to replace the existing devServer config
            // which is the most robust way to add a proxy.
            mergeStrategy: {
              'devServer': 'replace', // Changed from 'devServer.proxy' to 'devServer'
            },
            devServer: {
              // 🎯 The proxy object is now WRAPPED in an array:
              proxy: [
                {
                  context: ['/api'], // The path to intercept
                  target: 'https://your-external-api-url.com', // ⬅️ Your API URL
                  secure: false, 
                  changeOrigin: true, 
                  // OPTIONAL: Rewrite the path if needed (e.g., remove /api)
                  // pathRewrite: {'^/api' : ''} 
                },
              ],
            },
          };
        }
        return {};
      },
    };
  };