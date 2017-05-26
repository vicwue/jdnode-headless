// dependencies

var cloudscraper = require('cloudscraper');
var cheerio = require('cheerio')

// internals
module.exports = {
  flareGET: function(url, scrapeconfig, callback) {
/*

oQuery =  {
  entitity: "article",
  selector: "article.post",
  properties: {
    "Name" : "h2.entry-title p a span",
    "Image" :  {selector: "div.entry-thumbnail img", attr: "src"},
    "URL": {selector:"h2.entry-title a", attr: "href"}
  }

oResult = {
  "article": [{
    "failed": [],
    "Name": "\r\nThe Amazing Race Season 29 Episode 1134 minutes, 44 secs ago\r\n",
    "Image": "http://www.couchtuner.video/wp-content/uploads/2017/03/The-Amazing-Race-Season-29.jpg",
    "URL": "http://www.couchtuner.video/2017/05/the-amazing-race-season-29-episode-11-as-easy-as-stacking-cups-seoul-south-korea/"
  }, {
    "failed": [],
    "Name": "\r\nFire Island Season 1 Episode 637 minutes, 32 secs ago\r\n",
    "Image": "http://www.couchtuner.video/wp-content/uploads/2017/04/Fire-Island.jpg",
    "URL": "http://www.couchtuner.video/2017/05/fire-island-season-1-episode-6-mercury-is-in-retrograde/"
  }, 
  ...]
}

*/
    var oResult = {};
    // only one entity
    cloudscraper.get(url, function(error, response, body) {
      if (error) {
        console.log("err");
        return callback({"error": error});
      } else {
        console.log("response");
        /*for (var i = 0; i < Things.length; i++) {
          Things[i]

        };*/

        var $ = cheerio.load(body);
        oResult[scrapeconfig.entity] = [];
        var entities = oResult[scrapeconfig.entity];
        $(scrapeconfig.selector).each(function () {
          var result = {"failed":[]};
          for (var thinginterest in scrapeconfig.properties) { // one two and image1
              var interest = scrapeconfig.properties[thinginterest];
              if (typeof interest === "string") {
                // go short
                var test = $(interest, this).text();
                if (test) {
                  result[thinginterest] = test;  
                  console.log("text found!");
                } else {
                  result.failed.push(interest);
                }
              } else {
                if (interest.selector && interest.attr) {
                  // go css
                   result[thinginterest] = $(interest.selector, this).attr(interest.attr);
                      console.log("result found!");
                } else {
                  console.log("not enough information in: "+JSON.stringify(interest));
                  result.failed.push(interest);
                }
              } 
            }
            entities.push(result);
          });      
          return callback(oResult);
      }
    });
    
  },
       
  flarePOST: function() {
    cloudscraper.post('http://website.com/', {
      field1: 'value', 
      field2: 2
    }, function(error, response, body) {
      //...
    });
    return "Hola";
  },
  //A generic request can be made with cloudscraper.request(options, callback). 
  //The options object should follow request's options. 
  // Not everything is supported however, for example http methods other than GET and POST. 
  // If you wanted to request an image in binary data you could use the encoding option:

  flaregeneric:  function() {
    cloudscraper.request({
      method: 'GET',
      url:'http://website.com/image',
      encoding: null,
    }, function(err, response, body) {
      //body is now a buffer object instead of a string
    });
  }
};


