// ============================
// 🔹 CONTOH ABSTRAK CLASS
// ============================

// Kelas abstrak (tidak bisa diinstansiasi langsung)
class Kendaraan {
  constructor(merk) {
    this.merk = merk;
    // Mengecek agar tidak bisa membuat objek langsung dari kelas abstrak
    if (this.constructor === Kendaraan) {
      throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
    }
  }

  // Method abstrak (harus diimplementasikan oleh subclass)
  maju() {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
}

// Subclass yang mewarisi dari kelas abstrak Kendaraan
class Mobil extends Kendaraan {
  // Mengimplementasikan method abstrak 'maju()'
  maju() {
    return `${this.merk} melaju dengan kecepatan tinggi!`;
  }
}

// Implementasi
const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju()); 
// Output: Toyota Avanza melaju dengan kecepatan tinggi!

// const kendaraanBaru = new Kendaraan("Generic"); 
// ❌ Error: Kelas abstrak tidak bisa diinstansiasi langsung.


// ============================
// 🔹 CONTOH INTERFACE (simulasi)
// ============================

// Interface sebagai blueprint (bukan class, hanya objek panduan)
const kendaraanInterface = {
  maju: function () {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
};

// Class yang "mengikuti" interface kendaraanInterface
class Sepeda {
  constructor(merk) {
    this.merk = merk;
  }

  // Mengimplementasikan method yang ada di interface
  maju() {
    return `${this.merk} melaju dengan tenaga manusia!`;
  }
}

// Menguji apakah Sepeda mematuhi interface
const polygon = new Sepeda("Polygon");
console.log(polygon.maju()); 
// Output: Polygon melaju dengan tenaga manusia!

// Validasi sederhana apakah method 'maju()' diimplementasikan
if (typeof polygon.maju !== "function") {
  throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!");
}


// ============================
// 🔹 CONTOH ABSTRAK CLASS LAIN
// ============================

// Kelas abstrak Pembayaran
class Pembayaran {
  constructor(jumlah) {
    this.jumlah = jumlah;
    if (this.constructor === Pembayaran) {
      throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
    }
  }

  // Method abstrak yang wajib diimplementasikan di subclass
  prosesPembayaran() {
    throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!");
  }
}

// Subclass yang mengimplementasikan method abstrak
class KartuKredit extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui Kartu Kredit berhasil!`;
  }
}

// Subclass lain yang juga mengimplementasikan method abstrak
class PayPal extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui PayPal berhasil!`;
  }
}

// Implementasi
const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran()); 
// Output: Pembayaran 500000 melalui Kartu Kredit berhasil!

const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran()); 
// Output: Pembayaran 250000 melalui PayPal berhasil!
