class Mahasiswa {
  constructor(nama, nim, nilai) {
    this.nama = nama;  // Atribut publik
    this.nim = nim;    // Atribut publik

    let _nilai = nilai;  // Atribut private menggunakan closure

    // Getter untuk mengakses nilai
    this.getNilai = function() {
      return _nilai;
    };

    // Setter untuk mengubah nilai dengan validasi
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log('Nilai harus antara 0 dan 100');
      }
    };
  }
}

// Mahasiswa 1
const mhs1 = new Mahasiswa('Satura', '202401110004', 85);
console.log(`Nama: ${mhs1.nama}, NIM: ${mhs1.nim}`);
console.log(`Nilai awal: ${mhs1.getNilai()}`);
mhs1.setNilai(95);
console.log(`Nilai setelah diubah: ${mhs1.getNilai()}`);
mhs1.setNilai(150); // invalid
console.log("----------------------------------");

// Mahasiswa 2
const mhs2 = new Mahasiswa('Fahri', '202401110024', 80);
console.log(`Nama: ${mhs2.nama}, NIM: ${mhs2.nim}`);
console.log(`Nilai awal: ${mhs2.getNilai()}`);
mhs2.setNilai(90);
console.log(`Nilai setelah diubah: ${mhs2.getNilai()}`);
mhs2.setNilai(-5); // invalid
console.log("----------------------------------");

// Mahasiswa 3
const mhs3 = new Mahasiswa('Marcellino', '202401110053', 75);
console.log(`Nama: ${mhs3.nama}, NIM: ${mhs3.nim}`);
console.log(`Nilai awal: ${mhs3.getNilai()}`);
mhs3.setNilai(88);
console.log(`Nilai setelah diubah: ${mhs3.getNilai()}`);
mhs3.setNilai(120); // invalid
console.log("----------------------------------");

// Mahasiswa 4 (nama kamu)
const mhs4 = new Mahasiswa('Praditya Wahyu Saputra', '202401110033', 90);
console.log(`Nama: ${mhs4.nama}, NIM: ${mhs4.nim}`);
console.log(`Nilai awal: ${mhs4.getNilai()}`);
mhs4.setNilai(100);
console.log(`Nilai setelah diubah: ${mhs4.getNilai()}`);
mhs4.setNilai(200); // invalid
console.log("----------------------------------");
