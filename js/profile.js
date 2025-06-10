// Function to update user profile information across the site
function updateUserProfile() {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');

    if (!userName) {
        window.location.href = 'index.html';
        return;
    }

    // Update all elements that display the user name
    const userNameElements = document.querySelectorAll('.user-name');
    userNameElements.forEach(element => {
        element.textContent = userName;
    });

    // Update profile specific elements if on profile page
    if (window.location.pathname.includes('profile.html')) {
        const nameInput = document.querySelector('input[value="Priya Sharma"]');
        const emailInput = document.querySelector('input[type="email"]');
        if (nameInput) nameInput.value = userName;
        if (emailInput) emailInput.value = userEmail || '';
    }
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
}

// Run when the DOM is loaded
document.addEventListener('DOMContentLoaded', updateUserProfile); 