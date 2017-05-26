 flareGET: function(url, scrapeconfig, callback) {


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

