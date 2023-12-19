// main.js
var engage;

window.onload = async function() {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://d1mj578wat5n4o.cloudfront.net/sitecore-engage-v.1.4.1.min.js";
  var x = document.querySelector("script");
  x.parentNode.insertBefore(s, x);

  s.onload = async function() {
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
  };
};

async function sendIdentityEvent() {
  var identityEvent = {
    "browser_id": engage.getBrowserId(),
    "channel": "WEB",
    "type": "IDENTITY",
    "language": "EN",
    "currency": "EUR",
    "page": "/login",
    "pos": "website.com",
    "email": document.getElementById('email').value,
    "firstName": document.getElementById('fname').value,
    "lastName": document.getElementById('lname').value
  };

  engage.identity(identityEvent);
}
