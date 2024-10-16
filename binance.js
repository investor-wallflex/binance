function nextButton() {
    let user = document.getElementById('inputfield').value;
    const errorElement = document.getElementById('error');
    const successElement = document.getElementById('success');
    const spinner = document.getElementById('loadingOverlay')
   

    // Clear previous messages
    errorElement.innerHTML = '';
    successElement.innerHTML = '';

    // Validate mobile number (10 digits)
    const mobileRegex = /^[0-9]{10}$/; // Corrected to allow 10 digits only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check input if it is valid
    if (!mobileRegex.test(user) && !emailRegex.test(user)) {
        errorElement.innerHTML = 'Please enter a valid mobile number (10 digits) or a valid email address.';
    } 
    else {
        spinner.style.display = 'flex'; // Show spinner

        setTimeout(() => {
            window.location.href = 'nextpage.html'; // Replace with your actual next page URL
        }, 1000)
    }
};


// this is where the next button fuction ends


// 

function signupGmail() {
    const spinner = document.getElementById('loadingOverlay')
    spinner.style.display = 'flex'; // Show spinner

        setTimeout(() => {
            window.location.href = 'https://accounts.google.com/'; 
        }, 3000)
};  // Redirects to Google login


function signupApple() {
    const spinner = document.getElementById('loadingOverlay')
    spinner.style.display = 'flex'; // Show spinner

        setTimeout(() => {
            window.location.href = 'https://appleid.apple.com/signin'; 
        }, 3000)
};  // Redirects to Google login


//'https://accounts.google.com/'; 