import uuid from "uuid";

function createEmptyArray(num) {
	var initArr = [];
	for (let i=0; i<num; i++) {
		initArr.push([]);
	}
	return initArr;
}

/*create url query string*/
export function insertUrlParam(key, value, locStr) {
	// get the string following the "?" (eliminate "?")
	var query = window.location.search.substring(1);

	// is there anything there ?
	if(query.length) {
	   // are the new history methods available ?
	   if(window.history != undefined && window.history.pushState != undefined) {
	        // if pushstate exists, add a new state the the history, this changes the url without reloading the page
	        window.history.pushState({}, document.title, window.location.search);
	   }
	}
    key = encodeURI(key);
	value = encodeURI(value);
	// get key value pairs array
    var kvp = locStr.substring(1).split('&');
	// for each element in key value array
    var i=kvp.length; var x; while(i--)
    {
		// get key and value
        x = kvp[i].split('=');
		//update value if necessary
        if (x[0]==key)
        {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }
	//add new key value pair string if necessary
    if (i<0) {kvp[kvp.length] = [key,value].join('=');}
    //this will reload the page, it's likely better to store this until finished
    // document.location.search = kvp.join('&');
	//on booking page or not
	// if (document.querySelector("#booking-ctner")) {
	// 	return (kvp.join('&'));
	// } else {
	// 	return (kvp.join('&'));
	// }
	return (kvp.join('&'));
}

export function getUrlParam() {
	var s = decodeURI(document.location.search).substring(1).split("&");

	var i = s.length;
	var tmp;
	var tmpObj = {};
	var obj = {};
	while (i--) {
		tmp = s[i].split("=");
		var key = tmp[0];
		var value = tmp[1];
		tmpObj[key] = value;
		obj = Object.assign(obj, tmpObj);
	}

	return obj;
}

export function attachUrlParam(str) {
	var result = document.location.search.concat(str);
	return result;
}

export function replaceSubString(str, newStr) {
	var result = document.location.search.replace(str, newStr);
	return result;
}
