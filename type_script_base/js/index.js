var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// type: 
// kieu gia tri co ban
var hoTen = 'ho ten ';
var tuoi = 12;
var vaild = true;
var result10 = undefined;
var userLogin = null;
var nv1 = {
    id: 12,
    name: "van",
    luongCB: 12.2,
};
var nv2 = {
    id: 123,
    name: "vanw",
    luongCB: 12.2,
    mota: 'Chao'
};
var resultReponse = null;
var item = { id: '12!', price: 123, name: 'Product', img: "http://picsum.photos/2000" };
var item2 = { id: 12, name: 'Product2', };
var btn_a = {
    id: 123,
    innerHTML: 'innner',
    className: '1',
};
var btn_a2 = {
    id: 123,
    innerHTML: 'innner',
    className: 'btn btn-dark', css: 'css'
};
var FoodList = /** @class */ (function () {
    function FoodList() {
    }
    return FoodList;
}());
// type cua function
// set kiểu dữ liệu chả về
var Sum = function (a, b) {
    return a + b;
};
var showMess = function (mess) {
    console.log("🚀 ~ showMess ~ mess:", mess);
};
///
function main(callback) {
    callback('Heloo - XO');
}
var renderH1 = function (title) {
    document.querySelector('body').innerHTML = "<h1>".concat(title, "</h1>");
};
var renderH2 = function (title) {
    document.querySelector('body').innerHTML = "<h2 class=\"text-center\">".concat(title, "</h2>");
};
main(renderH2);
// kieu du lieu cua mang
var arrNumber = [123, 123, 45, 6, 678, 7, 9];
var arrProduct = [
    { id: '01', img: 'http://picsum.photos/2000', name: 'pro1', price: 23 },
    { id: '02', img: 'http://picsum.photos/5000', name: 'pro2', price: 26 },
];
/// tuple: thể hiện của dữ liệu dưới dạng mảng
/*
 muon cha veef [1, (newNumber:number):number => {
  return newNumber
}]
 thir phair khai bao bien result [number, (newNumber: number) => number]
 */
var result = [1, function (newNumber) {
        return newNumber;
    }];
var sv = [1, 'Nguyen van A'];
// kiểu dư liêu any, unkown : có thể lưu chữ nhiều kiểu dữ liệu khác nhaau
// note: neu lam dung thi code sẽ giống code javascript - dẫn đến không tường minh
// unkown: được check trước khi chạy- check dung mới cho phép chạy
var val_1 = 1;
var val_2 = { id: '01', img: 'http://picsum.photos/2000', name: 'pro1', price: 23 };
var val_3 = "123";
// cho phép người dùng thực thi Operation(+ - * /, gọi hàm ,..)
var ProductType = /** @class */ (function () {
    function ProductType() {
        this.id = "";
        this.name = "";
        this.img = "";
    }
    ProductType.prototype.showInfo = function () {
        console.log("id", this.id);
        console.log("name", this.name);
        console.log("img", this.img);
    };
    return ProductType;
}());
var prod1 = new ProductType();
prod1.id = "1";
prod1.name = 'name 1';
prod1.img = "http://picsum.photos";
// let result_prod1: any = undefined;
var result_prod1 = prod1;
result_prod1.showInfo();
var result_prod1_1 = prod1;
if (result_prod1_1 instanceof ProductType) {
    result_prod1_1.showInfo();
}
// result_prod1_1.showInfo() // nếu đưa ra khỏi if sẽ báo lỗi
// VD unkouwn
var number1 = 1;
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
var NhanVienAVan = /** @class */ (function () {
    function NhanVienAVan() {
        this.id = "";
        this.name = "";
        this.luongCB = 1000;
        this.heSoLuong = 10; // private -- sẽ cho hesoluong khong the thay doi gia tri ở ben ngoài
    }
    NhanVienAVan.prototype.tinhLuong = function () {
        return this.heSoLuong * this.luongCB;
    };
    NhanVienAVan.prototype.tinhPhuCap = function () {
        return this.heSoLuong * this.luongCB * 0.1;
    };
    return NhanVienAVan;
}());
var NhanVienKetoan = /** @class */ (function (_super) {
    __extends(NhanVienKetoan, _super);
    function NhanVienKetoan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nghiepVuKeToan = "";
        return _this;
    }
    return NhanVienKetoan;
}(NhanVienAVan));
//
var nv_1 = new NhanVienAVan();
nv_1.id = 10;
nv_1.name = "Nguyenx văn";
nv_1.luongCB = 2000;
// nv_1.heSoLuong = 123;
console.log(nv_1);
console.log("tien luong: ", nv_1.tinhLuong());
console.log("phu cap: ", nv_1.tinhPhuCap());
//
var nv_2 = new NhanVienKetoan();
nv_2.id = 10;
nv_2.name = "Nguyenx văn";
nv_2.luongCB = 2020;
// nv_2.heSoLuong = 123;
nv_2.nghiepVuKeToan = "bang 0";
console.log(nv_2);
console.log("tien luong: ", nv_2.tinhLuong());
console.log("phu cap: ", nv_2.tinhPhuCap());
