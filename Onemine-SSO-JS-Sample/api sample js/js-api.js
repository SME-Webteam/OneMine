// This is a API call on the server!  /api/OneMineUrl
// Based on your server you may use node.js or Rhino TBD based on your environment

// ----------------------------------------------------------------------------------------

	function OneMineUrl() {
		// Load the following setting from a configuration source
		var baseUrl = 'https://onemine.org';
		var uniqueName = 'ADD-YOUR-UNIQUE-NAME-HERE';
		var parnerKey = 'ADD-PARTNER-KEY-HERE';
		
		// Invoke the javascript functions
		var url = composeUrl(baseUrl,uniqueName, parnerKey);
		
		// Finally return the fully composed
		return url;
	}

// JavaScript Document