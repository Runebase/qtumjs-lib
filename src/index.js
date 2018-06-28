var runebasejs = require('bitcoinjs-lib')

Object.assign(runebasejs.networks, require('./networks'))

runebasejs.utils = require('./utils')

module.exports = runebasejs