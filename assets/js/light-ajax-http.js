/*
 * see: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
 */

function AjaxHttpGet (url, onSuccess, onFailure) {
    setTimeout(function() { 
        var isSuccess = true;
        if (isSuccess) {
            onSuccess (
                {status:"ok",data:{
                    results:[
                        {id:"1", active:"1", presenter:"Jan Atkinson", company:"Mr", email:"mr@bean.pl",phone:"222",
                            bio:"Ogólnie znany jako ...",title:"Nadciąga totalny kataklizm",
                            description:"Prowadzący w zabawny sposób przedstawi jak skutecznie ...",
                            additional:"Opowiem jak naprawiać zniszczone obrazy ...",
                            hash:"598b747637de",reg_date:"2019-03-14 20:51:07"},
                        {id:"2",  active:"1", presenter:"P1", company:"Abc", email:"a@abc.pl",phone:"333",
                            bio:"P1",title:"T1", description:"Aa", additional:"Aaa",
                            hash:"50417086988a",reg_date:"2019-03-14 23:51:07"},
                ]}}
            );
        } else {
            onFailure (400,{});
        }
    }, 200);
}

function AjaxHttpPut (url, jsonData, onSuccess, onFailure) {
    setTimeout(function() { 
        var isSuccess = true;
        if (isSuccess) {
            onSuccess ({result: "ok", message: "Added new request.", hash: "598b747637de", });
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
