 // This function should be invoked by a link or button on the partners page.
 // This may be added to an existing javascript file already included in the
 // page or as a new .js file.
 function launchOneMine(defaultUrl) {
	$.ajax({
		url: "/api/OneMineUrl",  // Must reflect the api call to generate the OneMine Url
		method: "GET",
		crossDomain: true,
		statusCode: {
			200: function(response) {  // User authenticated and the OneMine Url successfully returned
				window.open(response);
			},
			401: function() {          // User not authenticated, so open a new window with the default url
				window.open(defaultUrl);
			},
			403: function() {          // User not authenticated, so open a new window with the default url
				window.open(defaultUrl);
			}
		},
		error: function(error) {       // Outputs the error information to the browsers console for inspection
			console.log(JSON.stringify(error));
		},
	});
}
