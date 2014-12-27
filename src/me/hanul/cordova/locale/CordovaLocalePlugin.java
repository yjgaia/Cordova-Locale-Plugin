package me.hanul.cordova.locale;

import java.util.Locale;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class CordovaLocalePlugin extends CordovaPlugin {

	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {

		if (action.equals("getLanguage")) {
			callbackContext.success(Locale.getDefault().getLanguage());
		} else if (action.equals("getISO3Language")) {
			callbackContext.success(Locale.getDefault().getISO3Language());
		} else if (action.equals("getCountry")) {
			callbackContext.success(Locale.getDefault().getCountry());
		} else if (action.equals("getISO3Country")) {
			callbackContext.success(Locale.getDefault().getISO3Country());
		} else if (action.equals("toString")) {
			callbackContext.success(Locale.getDefault().toString());
		} else if (action.equals("getDisplayLanguage")) {
			callbackContext.success(Locale.getDefault().getDisplayLanguage());
		} else if (action.equals("getDisplayCountry")) {
			callbackContext.success(Locale.getDefault().getDisplayCountry());
		} else if (action.equals("getDisplayName")) {
			callbackContext.success(Locale.getDefault().getDisplayName());
		} else {
			// Returning false results in a "MethodNotFound" error.
			return false;
		}

		return true;
	}
}
