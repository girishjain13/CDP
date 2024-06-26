// Initialize Boxever
Boxever.init({
    "client_key": "sndbxus06p9cxhoqoiowkr1sbq5casz3",
    "target": "api.boxever.com/v1.2",
    "session": Boxever.generateSessionID(),
    "pointOfSale": "MobileRetail",
    "channel": "WEB"
});

// Get the form element
const form = document.getElementById('loginForm');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Get the input values
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;

    // Define the identity event
    const identityEvent = {
        browser_id: Boxever.getID(),
        channel: "WEB",
        type: "IDENTITY",
        language: "EN",
        currency: "EUR",
        page: "login",
        pos: "MobileRetail",
        identifiers: [
            {
                id: email,
                provider: "BXLP"
            }
        ],
        email: email,
        firstname: fname,
        lastname: lname
    };

    // Send the identity event
    Boxever.eventCreate(identityEvent, function(data){}, 'json');
});
