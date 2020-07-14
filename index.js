#!/usr/bin/env node
'use strict';
var latest = require('./lib/latest-version.js');
var needToUpd = function (options) {
  if (options.latestVersion == options.currentVersion) {
    return false;
  } else {
    return true;
  }
};
module.exports = function (options, cb) {
  latest(options, function (err, latestVersion) {
    options.latestVersion = latestVersion;
    if (err) {
        cb(err);
        return;
    } else if (options.currentVersion == undefined){
        cb(null, latestVersion, null);
        return;
    } else {
        cb(null, latestVersion, needToUpd(options));
        return;
    }
  });
};
