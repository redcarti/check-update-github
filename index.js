#!/usr/bin/env node
'use strict';
var latest = require('./lib/latest-version.js'), colors = require('colors');
var defaultMessage = function (options) {
  if (options.latestVersion == options.currentVersion) {
    return '\nYou have the latest version of ' + colors.green(options.name) + colors.dim(' (current: ' + options.currentVersion + ')');
  } else {
    return '\nUpdate available: ' + colors.green(options.latestVersion) + colors.dim(' (current: ' + options.currentVersion + ')');
  }
};
module.exports = function (options, cb) {
  latest(options, function (err, latestVersion) {
    if (err) {
      cb(err);
      return;
    }
    options.latestVersion = latestVersion;
    cb(null, latestVersion, defaultMessage(options));
    return;
  });
};