cordova.define("cordova-plugin-sms-receive.SMSReceive", function(require, exports, module) {
var smsExport = {};

smsExport.startWatch = function(successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMSReceive', 'startWatch', [] );
};

smsExport.stopWatch = function(successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMSReceive', 'stopWatch', [] );
};

module.exports = smsExport;

});
