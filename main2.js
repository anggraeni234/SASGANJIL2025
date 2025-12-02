function hitungZakat() {
    let gaji = parseFloat(document.getElementById("gaji").value);
    let pokok = parseFloat(document.getElementById("pokok").value);
    
    if (!gaji || !pokok) {
        document.getElementById("hasilZakat").innerHTML = "Mohon isi semua data!";
        return;
    }
    
    let bersih = gaji - pokok;
    let nisab = 85 * 84000; // Contoh: harga emas Rp 84.000 per gram
    let wajib = bersih >= nisab;
    let zakat = Math.round(bersih * 0.025);
    
    let teks = `
        <b>📊 HASIL PERHITUNGAN ZAKAT</b><br><br>
        Penghasilan bulanan: ${formatRupiah(gaji)}<br>
        Pengeluaran pokok: ${formatRupiah(pokok)}<br>
        Penghasilan bersih: ${formatRupiah(bersih)}<br><br>
        Nisab: ${formatRupiah(nisab)}<br><br>
    `;
    
    if (wajib) {
        teks += `<b>☑ ANDA WAJIB ZAKAT</b><br>
                 Zakat yang harus dibayar: <b>${formatRupiah(zakat)} per bulan</b>`;
    } else {
        teks += `<b>☒ ANDA TIDAK WAJIB ZAKAT</b><br>
                 Penghasilan belum mencapai nisab.`;
    }
    
    document.getElementById("hasilZakat").innerHTML = teks;
}

function resetZakat() {
    document.getElementById("gaji").value = "";
    document.getElementById("pokok").value = "";
    document.getElementById("hasilZakat").innerHTML = "Hasil perhitungan akan tampil di sini...";
}