window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const revealPosition = document.documentElement.scrollHeight - window.innerHeight - footer.offsetHeight;

    if (window.scrollY >= revealPosition) {
        footer.style.bottom = '0';
    } else {
        footer.style.bottom = '-400px';
    }
});