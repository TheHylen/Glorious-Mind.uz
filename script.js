// Animatsiyalarni ishga tushirish
AOS.init({ duration: 1200, once: true });

// Navbar scroll effekti
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Forma topshirish
document.getElementById('luxForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Sizning arizangiz qabul qilindi. Akademiyamiz xodimlari siz bilan bog'lanishadi.");
});