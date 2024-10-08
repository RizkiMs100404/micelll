onload = () =>{
        document.body.classList.remove("container");
};

var audio = document.getElementById("background-music");

// Cek apakah ada posisi sebelumnya di localStorage
if (localStorage.getItem("audioCurrentTime")) {
  audio.currentTime = localStorage.getItem("audioCurrentTime"); // Set audio ke posisi sebelumnya
}

// Menyimpan waktu saat ini setiap 100ms
setInterval(function() {
  localStorage.setItem("audioCurrentTime", audio.currentTime);
}, 100);