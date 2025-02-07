// JavaScript source code
// Utility function to toggle visibility of an element
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

// Event listener for menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        const section = this.getAttribute('data-section') + '-content';

        // Hide all sections first
        document.querySelectorAll('.content > div').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the selected section
        document.getElementById(section).classList.remove('hidden');

        // Update breadcrumb
        updateBreadcrumb(this.getAttribute('data-section'));
    });
});

// Event listener for ellipsis button
document.getElementById('ellipsis').addEventListener('click', function () {
    const moreButtons = document.getElementById('more-buttons');
    if (moreButtons.classList.contains('hidden')) {
        moreButtons.classList.remove('hidden');
    } else {
        moreButtons.classList.add('hidden');
    }
});

// Event listener for logout button
document.getElementById('logout-button').addEventListener('click', function () {
    // Clear session storage and local storage
    sessionStorage.clear();
    localStorage.clear();

    // Redirect to login page
    window.location.href = 'index.html';
});

// Function to update breadcrumb
function updateBreadcrumb(section) {
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `<li><a href="logged_in.html" data-section="home">HOME</a></li>`;

    if (section !== 'home') {
        breadcrumb.innerHTML += `<li>${capitalizeFirstLetter(section)}</li>`;
    }
}

// Utility function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.toUpperCase();
}

// Event listener for breadcrumb links
document.getElementById('breadcrumb').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const section = e.target.getAttribute('data-section') + '-content';

        // Hide all sections first
        document.querySelectorAll('.content > div').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the selected section
        document.getElementById(section).classList.remove('hidden');

        // Update breadcrumb
        updateBreadcrumb(e.target.getAttribute('data-section'));
    }
});

// Function to navigate to a new page
function navigateTo(page) {
    window.location.href = page;
}
