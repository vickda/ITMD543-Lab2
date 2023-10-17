// HTML Form
const submitForm = () => {
    const fname = document.querySelector(".fname").value
    const lname = document.querySelector(".lname").value

    alert(`Hello ${fname} ${lname}`)
}

// HTML Canvas Script
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Canvas variables
let boxX = 10;
let boxSpeed = 2;
let boxDirection = 1;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update box position
    boxX += boxSpeed * boxDirection;

    // Draw the box
    ctx.fillStyle = "blue";
    ctx.fillRect(boxX, 50, 30, 20);

    // Check if the box reached canvas boundaries
    if (boxX + 30 > canvas.width || boxX < 0) {
        boxDirection *= -1; // Reverse direction
    }

    requestAnimationFrame(animate);
}
animate();

// JavaScript Section

// Trick 1: Dynamic Text
const trick1Container = document.querySelector('.trick-container');
const trick1Text = document.querySelector('#trick-1');

trick1Text.addEventListener('click', () => {
    let style = window.getComputedStyle(trick1Container);
    if(style.display === 'none') {
        trick1Container.style.display = 'block'
    } else trick1Container.style.display = 'none'
});

// JavaScript for the Mouseover Effect (Trick 2)
const mouseoverContainer = document.getElementById('mouseover-container');

mouseoverContainer.addEventListener('mouseover', () => {
    mouseoverContainer.style.backgroundColor = getRandomColor();
});

mouseoverContainer.addEventListener('mouseout', () => {
    mouseoverContainer.style.backgroundColor = '';
});

// Generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Trick 3: Image Slider
const sliderImage = document.querySelector('#slider-image');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const images = ['htmllogo.png', 'csslogo.png', 'jslogo.png'];
let imageIndex = 0;

prevButton.addEventListener('click', () => {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    sliderImage.src = images[imageIndex];
});

nextButton.addEventListener('click', () => {
    imageIndex = (imageIndex + 1) % images.length;
    sliderImage.src = images[imageIndex];
});

// Trick 4: Interactive Counter
const counterElement = document.querySelector('#counter');
const incrementButton = document.querySelector('#increment-button');
const decrementButton = document.querySelector('#decrement-button');
let count = 0;

decrementButton.addEventListener('click', () => {
    count--;
    counterElement.textContent = count;
});

incrementButton.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});

// Trick 5: Dark Mode Toggle
const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    
    // const isDarkModeOn = document.querySelector(".dark-mode");
    // const htmlTag = document.querySelector(".main-html");
    // if(isDarkModeOn) htmlTag.style.background = 'black'
    // else htmlTag.style.background = 'white'

});


