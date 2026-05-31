// Animasi sederhana saat muncul
document.querySelectorAll('.glass').forEach((el) => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 1s';
    setTimeout(() => el.style.opacity = 1, 500);
});

// Integrasi form
document.getElementById('saranForm').onsubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih saran berharganya, Dyyrex!");
};
