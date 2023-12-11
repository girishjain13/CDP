
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
          
    
    // common.js

// Your engage function logic
function engageLogic() {
    // Simulate the useEffect hook
    document.addEventListener('DOMContentLoaded', function () {
        // Simulate the condition
        if (typeof engage !== 'undefined') {
            // Simulate the useEffect body
            sendPageViewEvent();
        }
    });

    // Your sendPageViewEvent function
    function sendPageViewEvent() {
        const eventData = {
            channel: "WEB",
            currency: "USD",
            pointOfSale: "MobileRetail",
            language: "EN",
            page: getPageName(), // This will be dynamic based on the page
            pageVariantId: "351"
        };

        const extensionData = {
            customKey: "customValue"
        };

        // Simulate the engage.pageView function
        if (typeof engage.pageView === 'function') {
            engage.pageView(eventData, extensionData);
        }
    }

    // Function to get the page name dynamically
    function getPageName() {
        // You can customize this logic based on your page names
        return window.location.pathname.replace('/', ''); // Assuming page names are in the URL path
    }
}


// For testing and debugging purposes only
console.log("Copy-paste the following line into Sitecore CDP > Guests > Search field:");
    console.log("bid:", engage.getBrowserId());
    
// ...



    // Send a VIEW event
    // ...
});