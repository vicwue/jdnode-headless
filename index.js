var requestFlare = require("./request.js");


// flareGET: function(url, scrapeconfig, callback) {
requestFlare.flareGET("http://www.couchtuner.video/", {
	entity: "article",
	selector: "article.post",
	properties: {
		"Name" : "h2.entry-title p a span",
		"Image" :  {selector: "div.entry-thumbnail img", attr: "src"},
		"URL": {selector:"h2.entry-title a", attr: "href"}
	}
	}, function(result) {
	if (result.error) {
		console.log("Error!");
	} else {
		console.log(JSON.stringify(result));
	}
});



/*

scrapeconfig = {
      one : "a .class",
      two : "img" ,// returns text
      image1 : {"selector": "img", "attr": "src"}

  }

  oResult = {
      failed: ["two"]
      one : "content",
      image1 : "thesource"

  }

*/