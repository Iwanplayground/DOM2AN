var motor = {
  // buat properti
  type: "bebek",
  cc: 180,
  color: "white",
  // buat method

  start: function () {
    console.log("werrrrrr");
  },
  drive: function () {
    console.log("wuzzzzzz...");
  },
  brake: function () {
    console.log("criiiitttt....");
  },
  stop: function () {
    console.log("....");
  },
};

// manggil method
console.log(motor.cc);
motor.start();
motor.brake();

console.log("++++++++++BATAS++++++++++");

var orang = {
  nama: "Ridwan",
  kelas: "ai",
  gender: "male",
  showIden: function () {
    alert(`Nama: ${this.nama} dari kelas ${this.kelas}`);
  },
};
orang.showIden();
// ini cuma pindahan dari yag html
