function calculateNilai() {
    var nilai = document.getElementById("txtNilai").value;
    var message = "";
    var grade = "";
    nilai = Number(nilai);

    if (nilai >= 95 && nilai <= 100) {
        message = "Selamat anda lulus dengan predikat A+";
        grade = "A+";
    } else if (nilai >= 90 && nilai <= 94) {
        message = "Selamat anda lulus dengan predikat A";
        grade = "A";
    } else if(nilai >= 85 && nilai <= 89) {
        message = "Selamat anda lulus dengan predikat B+";
        grade = "B+";
    } else if(nilai >= 80 && nilai <= 84) {
        message = "Selamat anda lulus dengan predikat B";
        grade = "B";
    } else if(nilai >= 75 && nilai <= 79) {
        message = "Selamat anda lulus dengan predikat C";
        grade = "C";
    } else if(nilai <= 74) {
        message = "Maaf anda belum lulus, silahkan remidi";
        grade = "No Grade";
    }
    document.getElementById("result").innerText = message;
    document.getElementById("Grade").value = grade;
    document.getElementById("NilaiOutput").value = nilai;
}