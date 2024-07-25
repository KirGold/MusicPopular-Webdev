let menuBtn = document.querySelector('.menu-icon');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

menuItem.forEach (function(menuItem) {
    menuItem.addEventListener('click',function(){
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
    })
})



























document.addEventListener('scroll', function() {
    let scroll = window.scrollY
    let image = document.getElementById('img')

    let rotation = scroll * 0.5
    image.style.transform = `rotate(${rotation}deg)`
})




const image = document.getElementById('img')
let isMouseDown = false
let currentRotation = 0
let rotationDirection = 0
let rotateTimeout = null;

image.addEventListener('mousedown', function(event) {
    isMouseDown = true
    let imageCenterX = image.offsetLeft + image.width / 2
    let mouseX = event.clientX
    if (mouseX > imageCenterX) {
        rotationDirection = 2
    } else {
        rotationDirection = -2
    }
    rotateImage()
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;
    clearTimeout(rotateTimeout);
});


function rotateImage() {
    if (isMouseDown) {
        currentRotation += rotationDirection;
        image.style.transform = `rotate(${currentRotation}deg)`;
        rotateTimeout = setTimeout(rotateImage, 20)
    }
}


















let modals = document.querySelectorAll(".modal");
let closeButtons = document.querySelectorAll(".close");

function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
    startMusic(modalId);
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "none";
    stopMusic(modalId);
}

function startMusic(modalId) {
    let audio = document.querySelector(`#${modalId} audio`);
    if (audio) {
        audio.play();
    }
}

function stopMusic(modalId) {
    let audio = document.querySelector(`#${modalId} audio`);
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

let musicBoxes = document.querySelectorAll('.Go_A__box__music-name[data-modal]');
musicBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
        let modalId = this.getAttribute('data-modal');
        openModal(modalId);
    });
});

closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let modalId = this.parentNode.parentNode.getAttribute('id');
        closeModal(modalId);
    });
});









