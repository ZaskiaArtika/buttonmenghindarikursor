const tombol = document.getElementById("tombol");

function pindahkanTombol() {
    const lebar = tombol.offsetWidth;
    const tinggi = tombol.offsetHeight;

    const batasX = window.innerWidth - lebar / 2 - 10;
    const batasY = window.innerHeight - tinggi / 2 - 10;

    const posisiX = lebar / 2 + 10 + Math.random() * (batasX - lebar / 2 - 10);
    const posisiY = tinggi / 2 + 10 + Math.random() * (batasY - tinggi / 2 - 10);

    tombol.style.left = posisiX + "px";
    tombol.style.top = posisiY + "px";
}

tombol.addEventListener("mouseenter", pindahkanTombol);

tombol.addEventListener("click", function () {
    alert("Wah, kamu berhasil mengklik tombolnya!");
});

window.addEventListener("resize", function () {
    tombol.style.left = "76%";
    tombol.style.top = "45%";
});
