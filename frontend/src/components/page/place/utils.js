import moment from "moment";
import uuid from "uuid";

export function formatDate(obj) {
	var result = [];
	/*get array of milliseconds*/
	obj.list.forEach(function(obj) {
		var weekday = moment(obj.date).isoWeekday();
		var day = moment(obj.date).format('D');
		var month = moment(obj.date).format('M');
		result = result.concat({
			"id": uuid(),
			"weekday": weekdays[weekday],
			"day": day,
			"month": month
		});
	});
	return result;
}
