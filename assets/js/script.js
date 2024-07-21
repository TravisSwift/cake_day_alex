function updateCountdown() {
    const targetDate = new Date('July 21, 2028 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;
    const countdownElement = document.getElementById('countdown');

    if (distance < 0) {
        const daysSince40 = Math.floor(-distance / (1000 * 60 * 60 * 24));
        countdownElement.innerHTML = `Time Since Middle Age Began: ${daysSince40} days`;
        document.getElementById('alexOlderImage').style.display = 'block';
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `Time Until Middle Age: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

function playSoundAndConfetti() {
    document.getElementById('fanfareAudio').play();
    launchConfetti();
}
function launchConfetti() {
    const colors = ['#FFD700', '#FF8C00', '#FF6347', '#4682B4', '#32CD32', '#FF69B4', '#800080'];  // Example color set
    for (let i = 0; i < 300; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = (Math.random() * window.innerWidth) + 'px';
        confetti.style.top = (-10 + Math.random() * 20) + 'px'; // Start from slightly above the view
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.opacity = Math.random();  // Add a variation in opacity
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetti.style.animation = 'confetti ' + (Math.random() * 3 + 2) + 's linear forwards';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    setInterval(updateCountdown, 1000);
});
