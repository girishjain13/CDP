async function sendIdentityEvent() {
  var settings = {
    clientKey: "<client_key_PLACEHOLDER>",
    targetURL: "<stream_api_target_endpoint_PLACEHOLDER>",
    pointOfSale: "<point_of_sale_PLACEHOLDER>",
    cookieDomain: "<cookie_domain_PLACEHOLDER>",
    cookieExpiryDays: 365,
    forceServerCookieMode: false,
    includeUTMParameters: true,
    webPersonalization: false
  };
  var engage = await window.Engage.init(settings);

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