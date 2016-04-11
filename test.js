'use strict';
var checkUpdate = require('./');
describe('checkUpdate', function () {

  it('should check for update and display true', function () {
    checkUpdate({
      name: 'check-update-tester',
      currentVersion: '0.0.1',
      user: 'cedced19',
      branch: 'master'
    }, function (err, lastestVersion, defaultMessage) {
      if (!err) {
        console.log(defaultMessage);
      }
    });
  });

  it('should check for update and display true without any branch defined', function () {
    checkUpdate({
      name: 'check-update-tester',
      currentVersion: '0.0.1',
      user: 'cedced19',
      branch: 'master'
    }, function (err, lastestVersion, defaultMessage) {
      if (!err) {
        console.log(defaultMessage);
      }
    });
  });

  it('should check for update and display false', function () {
    checkUpdate({
      name: 'check-update-tester',
      currentVersion: '0.0.2',
      user: 'cedced19',
      branch: 'master'
    }, function (err, lastestVersion, defaultMessage) {
      if (!err) {
        console.log(defaultMessage);
      }
    });
  });

  it('should check for update and display the version', function () {
    checkUpdate({
      name: 'check-update-tester',
      currentVersion: '0.0.2',
      user: 'cedced19',
      branch: 'master'
    }, function (err, lastestVersion) {
      if (!err) {
        console.log(lastestVersion);
      }
    });
  });
});
