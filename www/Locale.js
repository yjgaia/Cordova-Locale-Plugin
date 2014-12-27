module.exports = {

	getLanguage : function() {
		cordova.exec(undefined, undefined, 'CordovaLocalePlugin', 'getLanguage', []);
	},
	getISO3Language : function() {
		cordova.exec(undefined, undefined, 'CordovaLocalePlugin', 'getISO3Language', []);
	},
	getCountry : function() {
		cordova.exec(undefined, undefined, 'CordovaLocalePlugin', 'getCountry', []);
	},
	getISO3Country : function() {
		cordova.exec(undefined, undefined, 'CordovaLocalePlugin', 'getISO3Country', []);
	},
	toString : function() {
		cordova.exec(undefined, undefined, 'CordovaLocalePlugin', 'toString', []);
	},
	getDisplayLanguage : function() {
		cordova.exec(undefined, undefined, 'CordovaLocalePlugin', 'getDisplayLanguage', []);
	},
	getDisplayCountry : function() {
		cordova.exec(undefined, undefined, 'CordovaLocalePlugin', 'getDisplayCountry', []);
	},
	getDisplayName : function() {
		cordova.exec(undefined, undefined, 'CordovaLocalePlugin', 'getDisplayName', []);
	}
};
