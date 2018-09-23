/**
 * @param {string} url
 * @returns {Promise}
 */
function getUrl(url) {
	return new Promise((error, result) => {
		let request = new XMLHttpRequest();

		request.addEventListener("readystatechange", () => { 
			if (request.readyState == 4 && request.status == 200) {
				result(request.responseText);
			} else if (request.readyState = 4 && (request.status.toString().startsWith("3") || request.status.toString().startsWith("4") || request.status.toString().startsWith("5"))) {
				error(request.status);
			}
		});

		request.open("GET", url, true);
		request.send(null);
	});
}
