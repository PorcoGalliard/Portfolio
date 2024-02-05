const openButtons = document.querySelectorAll('.open-window');
const windowElement = document.getElementById('project-info');
const closeButton = document.querySelector('.close-btn');
const popupTitle = document.getElementById("popup-title")
const popupContent = document.getElementById("popup-content")

function openWindow(title, content) {
    popupTitle.textContent = title
    popupContent.textContent = content
    windowElement.style.display = 'block';
}

function closeWindow() {
    windowElement.style.display = 'none';
}

openButtons.forEach(button => {
    button.addEventListener('click', function() {
        const title = button.getAttribute('data-title');
        const content = button.getAttribute('data-content');
        openWindow(title, content);
    });
});

closeButton.addEventListener('click', closeWindow);

const mobileMenuToggle = document.getElementById("mobile-menu")
const navList = document.querySelector(".nav-list")

mobileMenuToggle.addEventListener('click', () => {
    navList.classList.toggle('show')
})
