// layout.js

//alert('You successfully linked your JavaScript file!');
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

function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
                // Initialize event listeners after including HTML
                initializeEventListeners();
            });
    });
}

function initializeEventListeners() {
    // Event listener for sidebar links
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
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
    const ellipsisButton = document.getElementById('ellipsis');
    if (ellipsisButton) {
        ellipsisButton.addEventListener('click', function () {
            const moreButtons = document.getElementById('more-buttons');
            if (moreButtons.classList.contains('hidden')) {
                moreButtons.classList.remove('hidden');
            } else {
                moreButtons.classList.add('hidden');
            }
        });
    }

    // Event listener for logout button
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            // Clear session storage and local storage
            sessionStorage.clear();
            localStorage.clear();

            // Redirect to login page
            window.location.href = 'index.html';
        });
    }

    // Event listener for breadcrumb links
    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) {
        breadcrumb.addEventListener('click', function (e) {
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
    }
}

function updateBreadcrumb(section) {
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `<li><a href="#" data-section="home">HOME</a></li>`;

    if (section !== 'home') {
        breadcrumb.innerHTML += `<li>${capitalizeFirstLetter(section)}</li>`;
    }
}

// Utility function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.toUpperCase();
}

// Function to navigate to a new page
function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', includeHTML);
//window.addEventListener('load', function () {includeHTML();});

