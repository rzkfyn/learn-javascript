//1.Objek Literal
// let saya = {
// 	nama : "Mohamad Rizki Sofyan",
// 	umur : new Date().getFullYear() - 2004,
// 	hoby : "-"
// }

//2.function object
// /**
//  * 
//  * @param {String} nama 
//  * @param {Number} umur 
//  * @param {Array} hobi 
//  */
// let mahasiswa = (nama,umur,hobi) => {
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.umur = umur;
// 	mahasiswa.hobi = hobi;

// 	return mahasiswa;
// }

// const sofyan = mahasiswa("Mohamad Rizki Sofyan", 15, ['playing rhythm game']);

//3.1 Constructor function version
// /**
//  * 
//  * @param {String} nama 
//  * @param {Number} umur 
//  * @param {Array} hobi 
// */
// function Mahasiswa(nama,umur,hobi){
// 	this.nama = nama;
// 	this.umur = umur;
// 	this.hobi = hobi;
// }

// const sofyan = new Mahasiswa("Mohamad Rizki Sofyan", 17, ['Playing Rhythm Game']);
//3.2 Contructor Class Version
// class Mahasiswa{
// 	/**
// 	 * 
// 	 * @param {String} nama 
// 	 * @param {Number} umur 
// 	 * @param {Array} hobi 
// 	 */
// 	constructor(nama,umur,hobi){
// 		this.nama = nama;
// 		this.umur = umur;
// 		this.hobi = hobi;
// 	}
// }
// const sofyan = new Mahasiswa("Mohamad Rizki Sofyan", 17, ['Playing Rhythm Game']);

// // 4.Object.create
// let methodMahasiswa = {
// 	/**
// 	 * 
// 	 * @param {Number} porsi 
// 	 */
// 	makan : function(porsi){
// 		this.energi += porsi;
// 		return `Selamat makan, ${this.nama}!`;
// 	},
// 	/**
// 	 * 
// 	 * @param {Number} jam 
// 	 */
// 	main : function(jam){
// 		this.energi -= jam;
// 		return `Selamat main, ${this.nama}`;
// 	},
// 	/**
// 	 * 
// 	 * @param {Number} jam 
// 	 */
// 	tidur : function(jam){
// 		this.energi += (jam * 2);
// 		return `Selamat main, ${this.nama}`;
// 	}
// }
// /**
//  * 
//  * @param {String} nama 
//  * @param {Number} umur 
//  * @param {Number} energi 
//  */
// let mahasiswa = (nama,umur,energi) => {
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.umur = umur;
// 	mahasiswa.energi = energi;

// 	return mahasiswa;
// }
// const sofyan = mahasiswa("Mohamad Rizki Sofyan", 17, 10);
// console.log(sofyan);
//5.1 Prototype function version
//
// function Mahasiswa(nama,energi){
//     this.nama = nama;
//     this.energi = energi;
// }
// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return this.energi;
// }
// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += (jam*2);
//     return this.energi;
// }
// const sofyan = new Mahasiswa("Mohamad Rizki Sofyan", 10);
// console.log(sofyan);
//5.2 Prototype class version
// class Mahasiswa{
//     constructor(nama, energi){
//         this.nama = nama;
//         this.energi = energi;
//     }
//     makan(porsi){
//         this.energi += porsi;
//         return this.energi;
//     }
//     tidur(jam){
//         this.energi += (jam*2);
//         return this.energi;
//     }
// }
// const sofyan = new Mahasiswa("Mohamad Rizki Sofyan", 10);
// console.log(sofyan);
/*  =============== Object.create() ===============*/
const methodObj = {
    makan : function(porsi){
        this.energi += porsi;
        return console.log(`${this.nama} Sekarang memiliki energi sebesar ${this.energi}`);
    }
}
const manusia = function(nama, energi){
    let manusia = Object.create(methodObj);
    manusia.nama = nama;
    manusia.energi = energi;
    return manusia;
}
const Sofyan = manusia("Sofyan", 10);
console.log(Sofyan);
Sofyan.makan(10);
console.log(Sofyan);

/*  =============== prototype ===============*/
// Versi Constructor Function
const Objects = function(nama, umur){
    this.nama = nama;
    this.umur = umur;
    this.energi = 10;
}
Objects.prototype.makan = function(porsi){
    this.energi += porsi;
    return console.log(`${this.nama} Sekarang memiliki energi sebesar ${this.energi}`);
}
const object = new Objects("Sofyan", 17);
console.log(object);
object.makan(3);
// Versi ES6 Class
class Objs{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
        this.energi = 10;
    }
    makan(porsi){
        this.energi += porsi;
        return console.log(`${this.nama} Sekarang memiliki energi sebesar ${this.energi}`)
    }
}
const objs = new Objs("Sofyan", 17);
console.log(objs);
objs.makan(2);