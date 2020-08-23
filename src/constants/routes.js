const env = require('../../.env.json')

module.exports.ENDPOINT_VERSION = 'v1'
module.exports.SESSION_SECRET = env.session.secret
module.exports.COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 90
