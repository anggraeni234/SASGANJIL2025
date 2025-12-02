function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
}

function hitungZakat() {
    let penghasilan = Number(document.getElementById("penghasilan").value);
    let pengeluaran = Number(document.getElementById("pengeluaran").value);

    if (!penghasilan || !pengeluaran) {
        alert("Harap isi semua data.");
        return;
    }

    // Hitung penghasilan bersih
    let bersih = penghasilan - pengeluaran;

    // Nisab zakat (setara 85 gram emas)
    let hargaEmas = 84000; // contoh asumsi
    let nisab = 85 * hargaEmas;

    let wajib = bersih >= nisab;
    let zakat = wajib ? bersih * 0.025 : 0;

    let hasilHTML = `
        Penghasilan bulanan: <b>${formatRupiah(penghasilan)}</b><br>
        Pengeluaran pokok: <b>${formatRupiah(pengeluaran)}</b><br>
        Penghasilan bersih: <b>${formatRupiah(bersih)}</b><br><br>

        Nisab: <b>${formatRupiah(nisab)}</b><br><br>
    `;

    if (wajib) {
        hasilHTML += `
            ✔ <b>ANDA WAJIB ZAKAT</b><br>
            Zakat yang harus dibayar:<br>
            <b>${formatRupiah(zakat)} per bulan</b>
        `;
    } else {
        hasilHTML += `
            ❌ <b>TIDAK WAJIB ZAKAT</b><br>
            Penghasilan belum mencapai nisab.
        `;
    }

    document.getElementById("hasil").innerHTML = hasilHTML;
    document.getElementById("hasil-box").style.display = "block";
}

function resetForm() {
    document.getElementById("penghasilan").value = "";
    document.getElementById("pengeluaran").value = "";
    document.getElementById("hasil-box").style.display = "none";
}