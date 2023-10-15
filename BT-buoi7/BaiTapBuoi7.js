//Bài 1
{
    var age = 18;
}
{
    let age = 19;
}
//console.log(age)
//Đoạn code trên in ra 18
console.log(18)
//Vì biến được khai báo bằng let thì chỉ được truy cập trong khối mã mà biến đó được khai báo.
//Biến được khai báo bằng var thì được xài nếu biến ngoài toàn cục không có
//và cụ thể trong đoạn code này biến khai báo bằng var nó sáng lên

//Bài 2:
function f1() {
    var age1 = 18;
}
function f2() {
    let age1 = 19;
}
//console.log(age1)
//Đoạn code báo lỗi. Vì phải log bên trong hàm và phải gọi hàm ra thì mới log ra giá trị
// Con lại sẽ bị báo lỗi vì biến age1 chưa đc khai báo

//Bài 3:
/**function kiemTraVietHoa(chuoi) {
    if(typeof chuoi == 'string'){
        if(chuoi == chuoi.toUpperCase()){
            return "Chuỗi có viết hoa";
        }else{return "Chuỗi không có viết hoa"};
    }else{return "Đây không phải là chuỗi"};
}*/

function kiemTraVietHoa(chuoi) {
    let hasUpperCase = false;
    for (char of chuoi){
        console.log('lap qua, char')
        if(char /= char.toLowerCase())
        hasUpperCase = true;
        break;
    }
    /**if(typeof chuoi == 'string'){
        if(chuoi == chuoi.toUpperCase()){
            return "Chuỗi có viết hoa";
        }else{return "Chuỗi không có viết hoa"};
    }else{return "Đây không phải là chuỗi"};*/
}
console.log(kiemTraVietHoa("a"))
console.log(kiemTraVietHoa("A"))
console.log(kiemTraVietHoa(1))