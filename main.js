function hitung() {
  // menampung nilai harga
  let harga = Number(document.getElementById("harga").value)
  
//menampung nilai jumlah
let jumlah = Number(document.getElementById("jumlah").value)

//menampung nilai diskon
let diskon = Number(document.getElementById("diskon").value)

//langkah 1: hitung subtotal
let subtotal = harga * jumlah

//langkah 2: menghitung diskon
let potongan = subtotal * (diskon / 100)
//langkah 3: menghitung pajak,misal 11%
let layanan = subtotal *(2/100)
let ongkir = 10000
let aplikasi = 1000
//langkah 4: hitung total
let total = subtotal - potongan + layanan + ongkir + aplikasi 


//langkah 5:
document.getElementById("hasil").innerHTML =`
subtotal: Rp ${subtotal} <br>
Diskon (${diskon}%): -Rp ${potongan} <br>  
biaya layanan : Rp (${layanan}) <br>
biaya Ongkir : Rp ${10000} <br>
biaya aplikasi: Rp ${1000} <br>
total bayaran : Rp ${total} <br>
`
}


function cekNilai () {
  //mengambil value dari elemen input nilai
//simpan kedalam variabel bersama "nilai"
let nilai = Number(document.getElementById('nilai').value)

//menginisiasi variabel "hasil" isinya string kosong ""
let hasil = ""

//menentukan angka A B C D berdasarkan isi variabel "nilai"
//menggunakan percabangan if (jika)
//dan membandingkan variabel "nilai"
if (nilai >= 88) {
  hasil = "Nilai A (sangat baik)"
} else if (nilai >= 75) {
  hasil = "Nilai B (Baik)"
} else if (nilai >=50) {
  hasil = "Nilai C (Cukup)"
} else if (nilai >= 30) {
  hasil = " Nilai D (kurang)"
}else if (nilai >= 0)
hasil = " Nilai E (sangat jelek)"

//tampilkan isi variabel "hasil" ke elemen "hasil" di html
document.getElementById('hasil').innerText = hasil

}