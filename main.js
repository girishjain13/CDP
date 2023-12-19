async function sendIdentityEvent() {
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
  var engage = await window.Engage.init(settings);

  var identityEvent = {
    "browser_id": engage.getBrowserId(),
    "channel": "WEB",
    "type": "IDENTITY",
    "language": "EN",
    "currency": "USD",
    "page": "/login",
    "pos": "MobileRetail",
    "email": document.getElementById('email').value,
    "firstName": document.getElementById('fname').value,
    "lastName": document.getElementById('lname').value
  };

  engage.identity(identityEvent);
}