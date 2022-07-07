let mahasiswa = ["Gema Nadia R", "Fadil Sauzu", "Memphis Depay"];

let jumlahhuruf = mahasiswa.map(nama => ({ nama: nama, julHuruf: nama.length}))
// penulisan object nama bisa ditulis sekali saja karena property nya sama dengan nilainya
// nama => ({ nama, julHuruf: nama.length})

console.log(jumlahhuruf); //mengembalikan object

console.table(jumlahhuruf); //menampilkan dalam bentuk table