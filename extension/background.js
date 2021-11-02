function is_user_signed_in() {
    return new Promise(resolve => {
        chrome.storage.local.get(['userStatus', 'user_info'],
            function (response) {
                if (chrome.runtime.lastError) resolve({ userStatus: 
                    false, user_info: {} })
            resolve(response.userStatus === undefined ?
                    { userStatus: false, user_info: {} } :
                    { userStatus: response.userStatus, user_info: 
                    response.user_info }
                    )
            });
    });
}


function addListener() {
	function addActivityStream(tab, screenshot = null) {
		const body = {
			name: tab.url,
			app_img: tab.favIconUrl,
			title: tab.title,
			screenshot: null,
		};

		return fetch("http://localhost:8000/api/activity", {
			method: "POST",
			credentials: "same-origin",
			headers: { "Content-Type": "application/json" },
			referrerPolicy: "no-referrer",
			body: JSON.stringify(body),
		}).then(response => response.json());
	}

	function setActivityStreamDuration(activityStreamId) {
		return fetch(`http://localhost:8000/api/activity/${activityStreamId}/end_time`, {
			method: "PUT",
			credentials: "same-origin",
			referrerPolicy: "no-referrer",
		}).then(response => response.json());
	}

	const lastActivityStream = null;
	
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		if (lastActivityStream) {
			setActivityStreamDuration(lastActivityStream.id);
		}

		if (changeInfo.status && changeInfo.status === 'complete') {
						// send screenshot instruction
						chrome.tabs.captureVisibleTab()
						.then(screenshotBlob => {
							addActivityStream(tab, screenshotBlob).then(activityStream => {
								lastActivityStream = activityStream;
							});
						})
						.catch(error => console.log(error))
		}
	}); 
	
	chrome.runtime.onMessage.addListener(function handleMessage(request, sender, sendResponse) {
		console.log("Text from the page: " + request.text);	
		}
	);
}

const waitUntilLogin = callback => {
	chrome.storage.local.get(["userStatus"], response => {
		const isLoggedIn = !!response.userStatus;
		if (isLoggedIn) {
			return callback();
		}

		chrome.storage.local.onChanged.addListener(function listener() {
			const isLoggedIn = !!response.userStatus;
			if (!isLoggedIn) {
				return;
			}

			chrome.storage.local.onChanged.removeListener(listener);
			return callback();
		});
	});
};

waitUntilLogin(() => {
	addListener();
});


// // The minimum prediction confidence.
// const threshold = 0.9;

// // Load the model. Users optionally pass in a threshold and an array of
// // labels to include.
// toxicity.load(threshold).then(model => {
// 	const textInput = $(e.target).val();

// 	model.classify(textInput).then(predictions => {
// 		// `predictions` is an array of objects, one for each prediction head,
// 		// that contains the raw probabilities for each input along with the
// 		// final prediction in `match` (either `true` or `false`).
// 		// If neither prediction exceeds the threshold, `match` is `null`.

// 		console.log(predictions);
// 		/*
// 		prints:
// 		{
// 			"label": "identity_attack",
// 			"results": [{
// 				"probabilities": [0.9659664034843445, 0.03403361141681671],
// 				"match": false
// 			}]
// 		},
// 		{
// 			"label": "insult",
// 			"results": [{
// 				"probabilities": [0.08124706149101257, 0.9187529683113098],
// 				"match": true
// 			}]
// 		},
// 		...
// 		 */


// 	});
// });