class Mahasiswa {
    constructor(nama, nim, jurusan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
    }

    perkenalan() {
        console.log(`Halo, saya ${this.nama}, NIM ${this.nim}, dari jurusan ${this.jurusan}`);
    }
}

// contoh penggunaan
let m1 = new Mahasiswa("Praditya Wahyu Saputra", "202401110033", "Informatika");
m1.perkenalan();
