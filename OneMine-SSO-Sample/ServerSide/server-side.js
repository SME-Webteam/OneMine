// Hash Creation using Md5 localized in line 2
import { md5 } from './md5.min.js';

// Helper function
function hex2a(value) {
	var hex = value.toString();
	var str = '';
	for (var i = 0; i < hex.length; i += 2)
		str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	return str;
}

// Using the supplied parameters, creates a string containing a properly formatted Url 
// used to access the OneMine v2 website.
function composeUrl(baseUrl, uniqueName, partnerKey) {
	var date = new Date();
	var timeStamp = date.getUTCFullYear() + (date.getUTCMonth() + 1).toString().padStart(2, '0') +
                    date.getUTCDate().toString().padStart(2, '0') + date.getUTCHours().toString().padStart(2, '0') + 
                    date.getUTCMinutes().toString().padStart(2, '0') + date.getUTCSeconds().toString().padStart(2, '0');

	var hashed = hex2a(md5(uniqueName + timeStamp + partnerKey));

	let secureCode = btoa(hashed);

	return baseUrl + '/sso/' + uniqueName + '?ts=' + timeStamp + '&secureCode=' + secureCode;
}	
