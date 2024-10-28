function updateTimeAndDate() {
    const now = new Date();
    
    // Mengatur format tanggal
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString('id-ID', options); // Format tanggal Indonesia
    
    // Mengatur format jam
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    // Menampilkan tanggal dan waktu di elemen yang sesuai
    document.getElementById('date').innerHTML = currentDate;
    document.getElementById('time').innerHTML = currentTime;
}

// Memperbarui jam dan tanggal setiap detik
setInterval(updateTimeAndDate, 1000);

// Memanggil fungsi saat pertama kali halaman dimuat
updateTimeAndDate();

function openPpt(pptPath) {
    document.getElementById('ppt-iframe').src = pptPath; // Atur jalur PPT sesuai tombol yang ditekan
    document.getElementById('ppt').style.display = 'flex'; // Tampilkan modal
}

function closePpt() {
    document.getElementById('ppt').style.display = 'none'; // Sembunyikan modal
    document.getElementById('ppt-iframe').src = ""; // Hapus src untuk menghentikan pemuatan PPT
}

function openModal(imageSrc) {
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal').style.display = 'flex'; // Tampilkan modal
}

function closeModal() {
    document.getElementById('modal').style.display = 'none'; // Sembunyikan modal
}