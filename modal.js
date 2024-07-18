document.addEventListener("DOMContentLoaded", () => {
    let modal = document.getElementById("main__button-modal");
    let btn = document.querySelector(".main__button .button-64");
    let span = document.querySelector(".main-modal-content-close");


    let openModal = () => {
        modal.style.display = "block";
    };
    let closeModal = () => {
        modal.style.display = "none";
    };

    btn.addEventListener("click", openModal);
    span.addEventListener("click", closeModal);
    
})





// Function to hide the loading screen and show the main content
function hideLoadingScreen() {
    let loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';

    let mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
}

// Wait for the window to load
window.addEventListener('load', function() {
    // Set a timeout to hide the loading screen after 3 seconds
    setTimeout(hideLoadingScreen, 2000);
});

// Also set a timeout to hide the loading screen after 3 seconds, in case the load event doesn't fire
setTimeout(hideLoadingScreen, 2000);