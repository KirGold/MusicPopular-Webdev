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








function hideLoadingScreen() {
    let loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';

    let mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
}

window.addEventListener('load', function() {
    setTimeout(hideLoadingScreen, 2000);
});

setTimeout(hideLoadingScreen, 2000);