// Bài 1: Tạo biến height và gán cho nó một giá trị số thể hiện chiều cao
const height = 162;
console.log(height + " cm");

// Bài 2: Tạo 1 comment 1 dòng và 1 comment từ 2 dòng trở lên 
// comment 1 dòng
/**comment 2 dòng
 * 2 dòng comment
 */

/**Bài 3:   Thực hiện log ra cửa sổ console dòng chữ sau: 
* “Chieu cao cua toi la <height>” 
* Lưu ý: <height> là biến height vừa tạo ở bài 1 
*/

console.log("Chieu cao cua toi la " + height + " cm");

// Bài 4: Cho biến weight có giá trị bằng 20, hãy tạo biến nextWeight có giá trị nhỏ hơn biết weight 3 đơn vị (dùng toán tử số học) 
let weight = 20;
let nextWeight = weight - 3;

// Bài 5: Sử dụng kiến thức về toán tử gán và toán tử số học để tạo các biến a, b, c, d thỏa mãn các yêu cầu sau đây: 
//a là 1 số dương 
//b là 1 số âm 
//c là kết quả của a + b 
//d là kết quả của a - b 

//let a = 5;
//let b = 0 - a;
//let c = a + b;
//let d = a - b;
//console.log("Biến a: " + a);
//console.log("Biến b: " + b);
//console.log("Biến c: " + c);
//console.log("Biến d: " + d);

// Bài 6: Cho đề sau, hãy xác định biến b sẽ mang giá trị gì?
//var a = 1; 
//var b = ++a * a--; 
//console.log("Bien b se mang gia tri la: 4");
//console.log(b);

// Bài 7: Tạo biến fullName (tên đầy đủ) mang giá trị tên đầy đủ, được kết hợp từ giá trị của 2 biến firstName (tên) và lastName (họ). 
var firstName = "Trinh ";
var lastName = "Gia Bao";
var fullName = firstName + lastName;
console.log("Ten cua toi la: " + fullName);

//Bài 8: Cho đề sau 
let a = 1; 
let b = -1; 
let c = 0; 
let d = 0; 
let e = a <= b; 
let f = c === d; 
let g = a >= c; 
console.log("Dap an la: A. false true true");
 //console.log(e, f, g) 
 //A. false true true 
 //B. true false true 
 //C. false false true 