/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
 */

require('babel-register');

switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack/webpack.prod.babel');
        break;
    case 'test':
    case 'testing':
        module.exports = require('./config/webpack/webpack.test.babel');
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./config/webpack/webpack.dev.babel');
}
