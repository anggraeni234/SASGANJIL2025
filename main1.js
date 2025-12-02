function hitungBMI() {
    let tinggi = document.getElementById("tinggi").value;
    let berat = document.getElementById("berat").value;

    if (tinggi === "" || berat === "") {
        alert("Mohon isi tinggi dan berat badan!");
        return;
    }

    // Rumus BMI
    let tinggiMeter = tinggi / 100;
    let bmi = (berat / (tinggiMeter * tinggiMeter)).toFixed(1);

    let kategori = "";

    if (bmi < 18.5) kategori = "Kekurangan berat badan";
    else if (bmi < 25) kategori = "Normal";
    else if (bmi < 30) kategori = "Kelebihan berat badan";
    else kategori = "Obesitas";

    let saran = "30";
    if (kategori === "Kelebihan berat badan" || kategori === "Obesitas") {
        saran = " - Perlu olahraga teratur";
    }

    document.getElementById("hasil").innerHTML =
        `BMI: ${bmi} (${kategori})${saran}`;
        
}