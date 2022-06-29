# JAVASCRIPT LANJUTAN

## Object Revisited

### 1. Membuat Object dengan Object Literal

```js
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
```

### 2. Membuat Object Function Declaration

```js
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
```

### 3. Membuat Object Constructor Function

```js
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
```

## Object.create()
pembuatan object dengan Object Literal tidak efektif untuk object yang banyak, karena harus membuat 1 persatu.

sedangkan pembuatan object dengan Function Decalaration Masih Kurang Efisien karena duplicate metod metod tetap dibuat dan disimpan ke dalam memori walaupun tidak dipakai ketika instansiasi

Namun ada caranya membuat nya lebih efektif dengan cara membuat object terpisah

```js
const methodMahasiswa = {

    makan : function (porsi) {
      this.energi += porsi;
      console.log(`Halo ${this.nama}, Selamat Makan`);
    },
    main : function (jam) {
      this.energi -= jam;
      console.log(`Halo ${this.nama}, selamat bermain`);
    }
}


function mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    // dengan memisahkan method ke dalam object lain, kita perlu mendaftarkan method method nya
    mahasiswa.makan = methodMahasiswa.makan
    mahasiswa.main = methodMahasiswa.main
    return mahasiswa;
  }
  
  let gema = mahasiswa(`Gema`, 10);
  let nadia = mahasiswa(`Nadia`, 10);
```

akan tetapi dengan Object.create() kita tidak perlu mendaftarkan method setiap kali ada method baru

```js
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
```

## Prototype
Dengan pemisahan method menjadi object yang terpisah kita jadinya mengelola 2 object, yaitu object utamanya dan object untuk menyimpan methodnya. dengan protype memungkinkan kita melakukan inheritance pada object. contoh dibawah adalah contoh penggunaan prototype pada constructor function

```js
function Mahasiswa(nama, energi) {
  // yang terjadi dibelakang layar adalah seperti dibawah ini
  // let this = Object.create(Mahasiswa.prototype)
  this.nama = nama;
  this.energi = energi;
  // return this;
  };

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, Selamat Makan`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return` Halo ${this.nama}, selamat bermain`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return` Halo ${this.nama}, selamat tidur`;
};

let gema = new Mahasiswa(`Gema`, 10);
let nadia = new Mahasiswa(`Nadia`, 10);
```

sehingga menurut pemahaman saya, prototype itu isinya method method dari object. cek method method yang ada pada object dengan cara 
```js
namaObject.prototype //ketik pada console
```
### Class pada Javascript
Javascript juga memiliki konsep class, namun sebenarnya dibelakangnya yang berjalan adalah konsep prototype.

```js

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
```

### Konsep Prototype pada Object Array atau yang lainnya
kita tahu bahwa di dalam javascript semua nya adalah object, sehinga semua nya menggunakan konsep prototype.
```js
let angka = [];
// sebenernyua yang terjadi di belakang layar adalah
let angka = new Array();

// pasti di dalamnya ada function yang bernama array
function Array(){
  let this = Object.create(Array.prototype)
}

// sehingga angka mewarisi semua method dari object array 
angka.reverse();
angka.sort();
```