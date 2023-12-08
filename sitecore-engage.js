
// Initialize the engage variable
var engage = undefined;

// Create and inject the <script> tag into the HTML
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = "https://d1mj578wat5n4o.cloudfront.net/sitecore-engage-v.1.4.2.min.js";
var x = document.querySelector("script");
x.parentNode.insertBefore(s, x);    

// Initialize the Engage SDK
s.addEventListener("load", async () => {
    var settings = {
        clientKey: "sndbxus06p9cxhoqoiowkr1sbq5casz3",
        targetURL: "https://api-engage-us.sitecorecloud.io",
        pointOfSale: "MobileRetail",
        cookieDomain: ".gjsitecorecdp.vercel.app",
        cookieExpiryDays: 365,
        forceServerCookieMode: false,
        includeUTMParameters: true,
        webPersonalization: false /* boolean or object. See Settings object for all options. Default: false */
    };
    engage = await window.Engage.init(settings);
    
            var pageURL = string.Format("'{0}'", "/" + ViewBag.Title);
        
      engage.push(function () {

            var viewEvent = {
                "browser_id": Boxever.getID(),
                "channel": "WEB",
                "type": "VIEW",
                "language": "EN",
                "currency": "USD",
                "page": @Html.Raw(pageURL),
                "pos": "MobileRetail",
              "sessionData" :{
            "deep_link" : @Html.Raw(pageURL),
            "is_logged_in" :false,
            "assistance" :false
                }

            };
            //Add UTM params
            viewEvent = Boxever.addUTMParams(viewEvent);
            // Invoke event create
            // (<event msg>, <callback function>, <format>)
            Boxever.eventCreate(viewEvent, function (data) { }, 'json');
        });

    

// For testing and debugging purposes only
console.log("Copy-paste the following line into Sitecore CDP > Guests > Search field:");
    console.log("bid:", engage.getBrowserId());
    
// ...



    // Send a VIEW event
    // ...
});