// Object Literal tidak efektif untuk object yang banyak
// Function Decalaration Masih Kurang Efisien karena duplicate metod metod tetap dibuat dan disimpan ke dalam memori walaupun tidak dipakai ketika instansiasi

//Namun ada caranya membuat nya lebih efektif dengan cara membuat object terpisah


// 2. Function Declaration


const methodMahasiswa = {

    makan : function (porsi) {
      this.energi += porsi;
      console.log(`Halo ${this.nama}, Selamat Makan`);
    },
    main : function (jam) {
      this.energi -= jam;
      console.log(`Halo ${this.nama}, selamat bermain`);
    },
    tidur : function (jam) {
      this.energi += jam * 2;
      console.log(`Halo ${this.nama}, selamat tidur`);
    }
}


function mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    // dengan memisahkan object, kita perlu mendaftarkan method method nya
 
    return mahasiswa;
  }
  
  let gema = mahasiswa(`Gema`, 10);
  let nadia = mahasiswa(`Nadia`, 10);