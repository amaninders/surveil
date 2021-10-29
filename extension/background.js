function flip_user_status(signIn, user_info) {
	if (signIn) {
			return fetch('http://localhost:3000/login', {
					method: 'GET',
					headers: {
							'Authorization': 'Basic ' + btoa(`${user_info.email}:${user_info.pass}`)
					}
			})
					.then(res => {
							return new Promise(resolve => {
									if (res.status !== 200) resolve('fail')

									chrome.storage.local.set({ userStatus: signIn, user_info }, function (response) {
											if (chrome.runtime.lastError) resolve('fail');

											user_signed_in = signIn;
											resolve('success');
									});
							})
					})
					.catch(err => console.log(err));
	} else if (!signIn) {

    // fetch the surveil/logout route
    return new Promise(resolve => {
        chrome.storage.local.get(['userStatus', 'user_info'], function (response) {
            console.log(response);
            if (chrome.runtime.lastError) resolve('fail');

            if (response.userStatus === undefined) resolve('fail');

            fetch('http://localhost:3000/logout', {
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + btoa(`${response.user_info.email}:${response.user_info.pass}`)
                }
            })
                .then(res => {
                    console.log(res);
                    if (res.status !== 200) resolve('fail');

                    chrome.storage.local.set({ userStatus: signIn, user_info: {} }, function (response) {
                        if (chrome.runtime.lastError) resolve('fail');

                        user_signed_in = signIn;
                        resolve('success');
                    });
                })
                .catch(err => console.log(err));
        });
    });
	}
}


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

	function doSomething (tab, screenshot = null) {
		return {
			name: tab.url,
			app_img: tab.favIconUrl,
			title: tab.title,
			screenshot: screenshot,
		};
	}
	
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		if (changeInfo.status && changeInfo.status === 'complete') {
			console.log(doSomething(tab))
						// send screenshot instruction
						chrome.tabs.captureVisibleTab()
						.then(screenshotBlob => {
							doSomething(tab, screenshotBlob)
						})
						.catch(error => console.log(error))
		}
	}); 

	chrome.tabs.onActivated.addListener(function(info) {
			chrome.tabs.get(info.tabId, function(tab) {
				console.log(doSomething(tab));
			});
	});
	
	chrome.runtime.onMessage.addListener(function handleMessage(request, sender, sendResponse) {
		console.log("Text from the page: " + request.text);	
		}
	);
}


addListener();


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