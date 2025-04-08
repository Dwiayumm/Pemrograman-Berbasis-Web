function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Tampilkan halaman yang dipilih
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

}

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

const profilePic = document.querySelector(".profile-photo");

profilePic.addEventListener("mouseover", function () {
    this.src = "image/foto dwi 2.jpg"; // Gambar saat hover
});

profilePic.addEventListener("mouseout", function () {
    this.src = "image/Foto dwi.jpg"; // Kembali ke gambar awal
});
