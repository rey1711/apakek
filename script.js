function showPage(pageId) {
    // Menyembunyikan semua halaman
    document.querySelectorAll('.page').forEach(function(page) {
        page.style.display = 'none';
    });

    // Menampilkan halaman yang dipilih
    document.getElementById(pageId).style.display = 'block';
}

// Menambahkan event listeners untuk tombol navigasi
document.getElementById('goToPage2').addEventListener('click', function() {
    showPage('page2');
});

document.getElementById('goToPage3').addEventListener('click', function() {
    showPage('page3');
});
