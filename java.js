document.getElementById('drop-button').addEventListener('click', dropBall);

function dropBall() {
    const slots = document.querySelectorAll('.bucket');
    const randomIndex = Math.floor(Math.random() * slots.length);
    slots[randomIndex].classList.add('ball');
    setTimeout(() => {
        slots[randomIndex].classList.remove('ball');
    }, 1500);
}
