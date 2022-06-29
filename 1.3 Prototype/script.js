
class Mahasiswa {
  constructor(nama,energi){
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat makan`
  }
  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat main`
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat tidur`
  }
}

let gema = new Mahasiswa(`Gema`, 10);
let nadia = new Mahasiswa(`Nadia`, 10);