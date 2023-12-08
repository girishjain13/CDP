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
        cookieDomain: "https://gjsitecorecdp.vercel.app",
        cookieExpiryDays: 365,
        forceServerCookieMode: false,
        includeUTMParameters: true,
        webPersonalization: false /* boolean or object. See Settings object for all options. Default: false */
    };
    engage = await window.Engage.init(settings);
    // VIEW event object
var event = {
    channel: "WEB",
    language: "EN",
    currency: "USD",
    page: "<page_PLACEHOLDER>"
};

// Send VIEW event
engage.pageView(event);

// For testing and debugging purposes only
console.log("Copy-paste the following line into Sitecore CDP > Guests > Search field:");
console.log("bid:", engage.getBrowserId());
    
    // Send a VIEW event
    // ...
});