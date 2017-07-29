// import Footer from "../common/Footer";
// import PlaceSec2 from "./PlaceSec2";

import {hack} from "../common/tools/init";
import {getUrlParam, insertUrlParam, getCinemas, getRegions, createEmptyArray, attachUrlParam, getLocationNum} from "../common/tools/utils";
// import {movies, result, cinemas} from "../common/seeds";
// import {apiResult, apiResult2, cinemaDetails, cinemaMovies, movieDetails, seatData} from "./seeds";
// import {getUniqueVersion, getListObjByVersion, getObjByDate, getMovieStaff} from "./utils";

import uuid from "uuid";
import moment from "moment";

const Place = () => {
	return (
		<div>
			<PlacePage/>
		</div>
	);
}

class PlacePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		// this.handleTopTextHover = this.handleTopTextHover.bind(this);
	}
	componentDidMount() {
		var obj = getUrlParam();
		var self = this;

		// if (obj.movie) {
		// 	hack.ajax(`orders/find_movie/${nowMovieId}`, function(d) {
		// 		self.setState({
		// 			nowDropCinemas: getCinemas(d.result),
		// 			nowDropRegions: getRegions(d.result)
		// 		});
		// 		texts[0].resultList = getCinemas(d.result);
		// 		texts[1].resultList = getRegions(d.result);
		// 	});
		//
		// 	this.setState({
		// 		mAcdText: [texts[0], texts[1]]
		// 	});
		// }
	}
	componentWillUnmount() {
		// window.removeEventListener('resize', this.updateWindowWidth.bind(this));
	}
	render() {
		return <span></span>;
	}
}

export default Place;
