

// type: 
// kieu gia tri co ban
let hoTen: string = 'ho ten ';
let tuoi: number = 12;
let vaild: boolean = true;
let result10: undefined = undefined;
let userLogin: null = null;

// kieu du lieu object
// type dung để khai báo kiểu dữ liêu tương tự number, boolean,...

type NhanVien = {
  id: number,
  name: string
  , luongCB: number,
  mota?: string // ?: optional properties // co thể có hoặc không trong Obj
}

let nv1: NhanVien = {
  id: 12,
  name: "van",
  luongCB: 12.2,
}
let nv2: NhanVien = {
  id: 123,
  name: "vanw",
  luongCB: 12.2,
  mota: 'Chao'
}

// trường hợp có nhiều kiểu dữ liệu chả về 

type ReponseTypeResult = string | boolean | number | NhanVien | undefined

let resultReponse: ReponseTypeResult = null;

// interface: Cũng tạo ra 1 định dạng như type
// khi 2 interface cung tên thì sẽ gộp hai thuộc tính từ hai interface lại
interface Product {
  id: string | number,
  name: string,
  price: number,
  img: string
}

let item: Product = { id: '12!', price: 123, name: 'Product', img: "http://picsum.photos/2000" }

// khi 2 interface cung tên thì sẽ gộp hai thuộc tính từ hai interface lại
interface Product1 {
  id: string | number,
}
interface Product1 {
  name: String,
  price?: number,
}

let item2: Product1 = { id: 12, name: 'Product2', }

// interface3: sử dụng kế thừa biến trước -- extends
interface Button {
  id: number | string,
  innerHTML: string,
  className: string,
}

interface ButtonGradient extends Button {
  css: string
}

let btn_a: Button = {
  id: 123,
  innerHTML: 'innner',
  className: '1',
}
let btn_a2: ButtonGradient = {
  id: 123,
  innerHTML: 'innner',
  className: 'btn btn-dark', css: 'css'
}

// interface cung dinh dang du lieu cho prototype(class)

interface CRUD {
  create: (newItem: Product) => void,
  update,
  delete,
  search,
}

class FoodList implements CRUD {
  create: (newItem: Product) => void;
  update: any;
  delete: any;
  search: any;
}

// type cua function
// set kiểu dữ liệu chả về
let Sum = (a: number, b: number): number => {
  return a + b
}


let showMess = (mess: string): void => {
  console.log("🚀 ~ showMess ~ mess:", mess)

}

///
function main(callback: (title: string) => void) {
  callback('Heloo - XO')
}
const renderH1 = (title: string): void => {
  document.querySelector('body').innerHTML = `<h1>${title}</h1>`
}
const renderH2 = (title: string): void => {
  document.querySelector('body').innerHTML = `<h2 class="text-center">${title}</h2>`
}

main(renderH2)

// kieu du lieu cua mang

let arrNumber: number[] = [123, 123, 45, 6, 678, 7, 9]

let arrProduct: Product[] = [
  { id: '01', img: 'http://picsum.photos/2000', name: 'pro1', price: 23 },
  { id: '02', img: 'http://picsum.photos/5000', name: 'pro2', price: 26 },
]

/// tuple: thể hiện của dữ liệu dưới dạng mảng
/*
 muon cha veef [1, (newNumber:number):number => {
  return newNumber
}]
 thir phair khai bao bien result [number, (newNumber: number) => number]
 */
let result: [number, (newNumber: number) => number] = [1, (newNumber: number): number => {
  return newNumber
}]

let sv: [number, string] = [1, 'Nguyen van A']


// kiểu dư liêu any, unkown : có thể lưu chữ nhiều kiểu dữ liệu khác nhaau
// note: neu lam dung thi code sẽ giống code javascript - dẫn đến không tường minh
// unkown: được check trước khi chạy- check dung mới cho phép chạy

let val_1: any = 1;
let val_2: any = { id: '01', img: 'http://picsum.photos/2000', name: 'pro1', price: 23 };
let val_3: any = "123";

// cho phép người dùng thực thi Operation(+ - * /, gọi hàm ,..)

class ProductType {
  id: string = "";
  name: string = "";
  img: string = "";
  showInfo(): void {
    console.log("id", this.id);
    console.log("name", this.name);
    console.log("img", this.img);
  }
}

let prod1 = new ProductType();
prod1.id = "1";
prod1.name = 'name 1';
prod1.img = "http://picsum.photos";


// let result_prod1: any = undefined;
let result_prod1: any = prod1;

result_prod1.showInfo();

let result_prod1_1: unknown = prod1;
if (result_prod1_1 instanceof ProductType) {
  result_prod1_1.showInfo()
}
// result_prod1_1.showInfo() // nếu đưa ra khỏi if sẽ báo lỗi

// VD unkouwn

let number1: unknown = 1;

// number1++; // errr An arithmetic operand must be of type 'any', 'number', 'bigint' or an enum type.
if (typeof number1 === 'number') {
  number1++;
}
console.log(number1);


// /truongwf hợp không 
/*
 - access modifiler: 
  + private : trong class dungf dc, instance (đối tượng tạo từ class đó ) không truy xuất, thay đổi giá trị được. Lớp con không thể sử dụng được
  + public : giá trị mặc  định, tắt cả đều truy suất được
  + protected: trong class dùng được, instance không sử dụng được, lớp con dùng được 
 */

class NhanVienAVan {
  public id: string | number = "";
  name: string = "";
  luongCB: number = 1000;
  private heSoLuong: number = 10; // private -- sẽ cho hesoluong khong the thay doi gia tri ở ben ngoài
  tinhLuong(): number {
    return this.heSoLuong * this.luongCB;
  }
  tinhPhuCap(): number {
    return this.heSoLuong * this.luongCB * 0.1;
  }
}
class NhanVienKetoan extends NhanVienAVan {
  nghiepVuKeToan: string = "";
}
//
let nv_1:NhanVienAVan = new NhanVienAVan();

nv_1.id = 10;
nv_1.name = "Nguyenx văn";
nv_1.luongCB = 2000;
// nv_1.heSoLuong = 123;
console.log(nv_1);
console.log("tien luong: ", nv_1.tinhLuong());
console.log("phu cap: ", nv_1.tinhPhuCap());

//
let nv_2:NhanVienKetoan = new NhanVienKetoan();

nv_2.id = 10;
nv_2.name = "Nguyenx văn";
nv_2.luongCB = 2020;
// nv_2.heSoLuong = 123;
nv_2.nghiepVuKeToan = "bang 0"
console.log(nv_2);
console.log("tien luong: ", nv_2.tinhLuong());
console.log("phu cap: ", nv_2.tinhPhuCap());

