export const hack = {
	http: location.protocol == "http:" ? "//" : "https://",
	init: function () {
		// this.ieBrowser();
	},
	API: function () {
		switch(location.host){
			// test host
			case "221.222.222.131:8080":
				return this.http + "221.222.222.131:8080/ez_proxy-1.0-SNAPSHOT/hack/"
			break;
			default:
				return this.http + "221.222.222.131:8080/ez_proxy-1.0-SNAPSHOT/hack/"
			break;
		}
	},
	ajax: function (a, data=null) {
		const url = this.API() + a;
		const d = $.getJSON(
			url, data
		);
		return d;
	}
};
hack.init();
