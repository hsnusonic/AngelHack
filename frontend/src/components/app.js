// font-awesome
import "fonts/fontawesome-webfont.eot";
import "fonts/fontawesome-webfont.svg";
import "fonts/fontawesome-webfont.ttf";
import "fonts/fontawesome-webfont.woff";
import "fonts/fontawesome-webfont.woff2";
import "fonts/FontAwesome.otf";

// html
// root
import "index.html";
// booking
import "page/place/index.html";

// css
import "main.sass";

// image
import "sprites.png";
import "default.png";

// init
import "common/tools/init.js";

// component
// root
import Index from "index/Index";
if(document.querySelector("#root")) {
	ReactDOM.render(
		<Index />,
		document.getElementById("root")
	);
};

// place
import Place from "place/index";
if(document.querySelector("#place-ctner")) {
	ReactDOM.render(
		<Place/>,
		document.getElementById("place-ctner")
	);
};
