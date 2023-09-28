//Bài 1:
function inThongTin() {
    console.log("Toi la hoc vien lop app K16");
};
inThongTin();

//Bài 2:
function inTen() {
    console.log("Toi ten la Nguyen Van A");
};
console.log("Dap an khi chay code tren la: Toi ten la Nguyen Van A"); 
//inTen();

//Bài 3:
let lopAppK16 = {
    tenHocVien : "Bao",
    "tuổi" : 28,
    queQuan : function(){
    console.log("TP Ho Chi Minh");
}
};
console.log(lopAppK16);

//Bài 4:
function daysUntilFutureDate(futureDate) {
  const ngayHienTai = new Date();
  return futureDate.getDate() - ngayHienTai.getDate();
}
let targetDate = new Date("2023-09-27");
//console.log(daysUntilFutureDate(targetDate));
console.log("Số ngày còn lại đến ngày " + targetDate.toDateString() + " là " + daysUntilFutureDate(targetDate) + " ngày.");
