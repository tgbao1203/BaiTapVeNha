//Bài 1:
function timSoLonNhat(num1, num2, num3){
    if(num1 > num2 && num1 > num3 || num1 > num2 && num2 == num3 || num1 > num3 && num2 == num3){
        return num1;
    }else if (num1 < num2 && num2 > num3 || num2 > num1 && num1 == num3 || num2 > num3 && num1 == num3){
        return num2;
    }else if (num3 > num1 && num3 > num2 || num3 > num1 && num1 == num2 || num3 > num2 && num1 == num2){
        return num3;
    }else if (num1 == num2 && num3 < num1 || num1 == num3 && num2 < num1){
        return num1;
    }else if (num2 == num3 && num1 < num2){
        return num2;
    }else{return num1;}
}
console.log("Giá trị lớn nhất là:",timSoLonNhat(4,4,4).toString());

//Bài 2:
const kiemTraSoChan = (so) => {
    if(so % 2 == 0){
        return true;
    }
    else{return false;}
}
console.log(kiemTraSoChan(11));
//Bài 3:
const mang = [1,3,5,7,9];
console.log(mang[3]);

//Bài 4:
mang.splice(1, 1, "them1", "them2");
mang.unshift("add1", "add2", "add3");
console.log(mang);

const xoaPhanTuCuoi = mang.pop();
console.log(xoaPhanTuCuoi);

const mang2 = ["random1", "random2"];
const mangMoi = mang.concat(mang2);
console.log(mangMoi);

mangMoi.reverse();

console.log("Mảng cũ:", mang.length + " " + "Mảng mới:", mangMoi.length);
