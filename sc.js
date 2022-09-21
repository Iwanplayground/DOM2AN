// // topiknya adalah dom selection
// const judul = document.getElementById("judul"); //mlakukan pengangkapan
// // ngubah warnnya jd merah gimana tpi gapaek css
// judul.style.color = "white"; // dia otomatis nambahi style di inline css
// judul.style.backgroundColor = "grey";
// judul.innerHTML = "Halo dunia";

// // document.getELementsByTagName <- ini pake tagname
// const p = document.getElementsByTagName("p");
// p[2].style.backgroundColor = "#937DC2";

// // cari pke class
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "ini diubah dari js";

// // dari kduanya itu sama2 ngehasilin html collection
// // skarang ttg queryselect
// const p4 = document.querySelector("#b p");
// p4.style.color = "red";
// p4.style.fontsize = "25px";

// const li2 = document.querySelector("#b ul li:nth-child(2)");
// li2.style.backgroundColor = "#AAC4FF";

// //skarang coba review kita mau yg di p2(ingat yg di class name hrs deklarasikan indexnya)
// const p2 = document.getElementsByClassName("p2")[0];
// p2.style.backgroundColor = "#FAF4B7";

const judul = document.getElementsByTagName("h1")[0];

judul.setAttribute("name", "iwan");

// misal nambahin class baru
const p2 = document.querySelector(".p2");
p2.classList.add("label"); // ngecek kalo p2 punya lebel belum itu toogle kek mota matiin lampu

// misal mau namabhin prgrph baru dibwh parag 3
const pNew = document.createElement("p");
const teksPNew = document.createTextNode("paragraf yg baru");
// kan 2 node itu gaada hubungannya nah mari kita simpan kedalam paragraf
pNew.appendChild(teksPNew);
// simpan pNew di akhir section a

// ingat aja rangkainnya sama kek analogi vas bunga
const sectionA = document.getElementById("a");
sectionA.appendChild(pNew);

// skarang coba bikin list baru

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("ini item baru");
liBaru.appendChild(teksLiBaru);
// rangkai di ruang tamu ambil si vasbunga

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("section#b ul li:nth-child(2)");

ul.insertBefore(liBaru, li2);
