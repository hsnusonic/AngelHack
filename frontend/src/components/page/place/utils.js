import moment from "moment";
import uuid from "uuid";

let weekdays = ["", "一", "二", "三", "四", "五", "六", "日"];

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

export function getUniqueVersion(arr) {
	var tmpArr = [];
	/*get version array*/
	arr.forEach(function(obj) {
			tmpArr = tmpArr.concat(obj.movie_version);
		}
	);
	/*get unique version array*/
	var result = Array.from(new Set(tmpArr));
	return result;
}

export function getObjByDate(arr, date) {
	var tmpArr = arr.find(function(obj) {
		return (date === obj.date);
	});
	return tmpArr;
}

export function getListObjByVersion(arr, version) {
	var tmpArr = arr.filter(function(obj) {
		return (version === obj.movie_version);
	});
	return tmpArr;
}

export function getMovieNames(arr) {
	var tmpArr = [];
	arr.forEach(function(obj) {
		tmpArr = [
			...tmpArr,
			[obj.movie_id,
			obj.movie_title]
		];
	});
	return tmpArr;
}

export function getGradeText(num) {
	var text;
	switch (num) {
		case 0:
			text = "輔15級";
			break;
		case 1:
			text = "普遍級";
			break;
		case 2:
			text = "保護級";
			break;
		case 3:
			text = "輔12級";
			break
		case 4:
			text = "限制級";
			break;
		default:
			text = "";
	}
	return text;
}

export function getMovieStaff(arr) {
	var obj = {};
	console.log("arr: " + arr);
	obj.cast = arr.filter(function(obj) {
		return (obj.staff_type === "2");
	});
	obj.director = arr.filter(function(obj) {
		return (obj.staff_type === "1");
	});
	return obj;
}
