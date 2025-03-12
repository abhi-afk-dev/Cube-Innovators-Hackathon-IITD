document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const overlay = document.getElementById('overlay');
    const overlayContent = document.getElementById('overlay-content');
    let loginTab, loginForm, closeOverlayButton;

    function loadOverlayContent() {
        fetch('http://localhost:5000/over')
            .then(response => {
                if (!response.ok) { // Check for HTTP errors
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                overlayContent.innerHTML = data;

                // Initialize variables after content is loaded
                loginTab = document.getElementById('loginTab');
                loginForm = document.getElementById('login-details');
                closeOverlayButton = document.getElementById('closeOverlay');

                // Check for missing elements and log errors
                if (!loginTab) console.error('loginTab not found');
                if (!loginForm) console.error('loginForm not found');
                if (!closeOverlayButton) console.error('closeOverlayButton not found');

                // Attach event listeners
                if (loginTab && loginForm && closeOverlayButton) {
                    loginTab.addEventListener('click', showLoginForm);
                    closeOverlayButton.addEventListener('click', closeOverlay);
                } else {
                    console.error('One or more elements not found in overlay.html');
                    overlayContent.innerHTML = '<p>Error loading content.  Check the console for details.</p>'; // More helpful message
                }
            })
            .catch(error => {
                console.error('Error loading overlay.html:', error);
                overlayContent.innerHTML = `<p>Error loading content: ${error.message}. Check the console.</p>`;  // More helpful message
            });
    }

    if (loginButton && overlay && overlayContent) { 
        loginButton.addEventListener('click', function() {
            overlay.style.display = 'flex';
            loadOverlayContent();
        });
    } else {
        console.error('Essential elements (loginButton, overlay, overlayContent) not found on the page.');
    }


    function closeOverlay() {
        overlay.style.display = 'none';
        overlayContent.innerHTML = ''; // Clear content on close
    }

    function showLoginForm() {
        if (loginTab && loginForm) {
            loginTab.classList.add('active-tab');
            loginForm.classList.remove('hidden');
        }
    }
});