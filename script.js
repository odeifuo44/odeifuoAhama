document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        circle.style.setProperty('--percentage', percentage);

        // Animate the circle progress
        let progress = 0;
        const interval = setInterval(() => {
            progress++;
            circle.style.background = `conic-gradient(#054084 ${progress}%, #e0e0e0 ${progress}%)`;
            if (progress >= percentage) clearInterval(interval);
        }, 10); // Adjust the animation speed here
    });
});



// const texts = ['I am a developer', "I'm a graphic designer"];
// let index = 0;
// let charIndex = 0;
// let typingDelay = 100;
// let erasingDelay = 50;
// let newTextDelay = 2000;
// const typedTextElement = document.getElementById('typed-text');

// function type() {
//     if (charIndex < texts[index].length) {
//         typedTextElement.textContent += texts[index].charAt(charIndex);
//         charIndex++;
//         setTimeout(type, typingDelay);
//     } else {
//         setTimeout(erase, newTextDelay);
//     }
// }

// function erase() {
//     if (charIndex > 0) {
//         typedTextElement.textContent = texts[index].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(erase, erasingDelay);
//     } else {
//         index = (index + 1) % texts.length;
//         setTimeout(type, typingDelay + 500);
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     setTimeout(type, newTextDelay);
// });
