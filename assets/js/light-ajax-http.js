/*
 * see: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
 */

function AjaxHttpGet (url, onSuccess, onFailure) {
    setTimeout(function() { 
        var isSuccess = true;
        if (isSuccess) {
            onSuccess ({});
        } else {
            onFailure (400,{});
        }
    }, 200);
}

function AjaxHttpPut (url, jsonData, onSuccess, onFailure) {
    setTimeout(function() { 
        var isSuccess = true;
        if (isSuccess) {
            onSuccess ({result: "ok", message: "Added new request."});
        } else {
            onFailure (400,{result: "error", message: "Invalid email address."});
        }
    }, 300);
}



function AjaxHttpPutCORS (url, jsonData, onSuccess, onFailure) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if(xhr.status === 200) {
				try {
					onSuccess (JSON.parse(xhr.responseText));
				} catch (e) {
					onFailure (-1,xhr.responseText);
				}
            } else {
                onFailure (xhr.status,xhr.responseText);
            }
		}
	};
	const IS_ASYNC = true;
	xhr.open('PUT', url, IS_ASYNC); 
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(JSON.stringify(jsonData));
}
