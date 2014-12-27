module.exports = {

	getLanguage : function(callback) {
		cordova.exec(callback, undefined, 'CordovaLocalePlugin', 'getLanguage', []);
	},
	getISO3Language : function(callback) {
		cordova.exec(callback, undefined, 'CordovaLocalePlugin', 'getISO3Language', []);
	},
	getCountry : function(callback) {
		cordova.exec(callback, undefined, 'CordovaLocalePlugin', 'getCountry', []);
	},
	getISO3Country : function(callback) {
		cordova.exec(callback, undefined, 'CordovaLocalePlugin', 'getISO3Country', []);
	},
	toString : function(callback) {
		cordova.exec(callback, undefined, 'CordovaLocalePlugin', 'toString', []);
	},
	getDisplayLanguage : function(callback) {
		cordova.exec(callback, undefined, 'CordovaLocalePlugin', 'getDisplayLanguage', []);
	},
	getDisplayCountry : function(callback) {
		cordova.exec(callback, undefined, 'CordovaLocalePlugin', 'getDisplayCountry', []);
	},
	getDisplayName : function(callback) {
		cordova.exec(callback, undefined, 'CordovaLocalePlugin', 'getDisplayName', []);
	}
};
