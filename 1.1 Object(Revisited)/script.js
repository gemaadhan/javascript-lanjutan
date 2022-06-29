// 1. Membuat Object dengan Object Literal
let mahasiswa1 = {
  nama: "Gema",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Selamat Datang ${this.nama}, selamat makan`);
  },
};
let mahasiswa2 = {
  nama: "Nadia",
  energi: 30,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Selamat Datang ${this.nama}, selamat makan`);
  },
};

// 2. Function Declaration
function mahasiswa(nama, energi) {
  let mahasiswa = [];
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`);
  };

  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  };

  return mahasiswa;
}

let gema = mahasiswa(`Gema`, 10);
let nadia = mahasiswa(`Nadia`, 10);

// 3. Constructor Function
function mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  };
}

let gema = new mahasiswa("Gema", 10);
