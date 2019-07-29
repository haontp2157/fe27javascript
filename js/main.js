/* 
    QUAN LY NHAN VIEN
    -- THEM NHAN VIEN
*/

// var nhanVien = new NhanVien("");
function themNgDung(){
    console.log("Them ng dung");
}

var mangNV = [];
var validation = new Validation();

var jsonData = localStorage.getItem("DSNV");
if (jsonData) {
    mangNV = JSON.parse(jsonData);
    HienThi(mangNV);
}
else {
    mangNV = []
}

function getEle(id){
    return document.getElementById(id);
}


function LayThongTin(){
    var maNV = getEle("msnv").value;
    var tenNV = getEle("name").value;
    var emailNV = getEle("email").value;
    var matKhauNV = getEle("password").value;
    var ngaySinhNV = getEle("datepicker").value;
    var chucVuNV = getEle("chucvu").value;
    //tao doi tuong thong qua lop Nhan Vien
    var nhanVien = new NhanVien(maNV,tenNV,emailNV,matKhauNV,ngaySinhNV,chucVuNV);
    nhanVien.tinhTongLuong();
    return nhanVien;
}

function ThemNguoiDung(){
    var nhanVien = LayThongTin();
    var isValid = true;
    isValid = validation.KiemTraRong("msnv","tbMaNV","(*) Vui lòng nhập mã");
    isValid &= 
    validation.KiemTraRong("name","tbTen","(*) Vui lòng nhập tên") &&
    validation.KiemTraDinhDangChu("name","tbTen","(*) Vui lòng nhập đúng ký tự");
    isValid &= validation.KiemTraRong("email","tbEmail","(*) Vui lòng nhập email") &&validation.KiemTraEmail("email","tbEmail","(*) Vui lòng nhập đúng email");
    isValid &=
    validation.KiemTraRong("password","tbMatKhau","(*) Vui lòng nhập email") &&
    validation.KiemTraPassword("password","tbMatKhau","(*) Vui lòng nhập mật khẩu bao gồm chữ hoa, chữ thường, ký tự ĐB, và có ít nhất 8 kí tự");
    // isValid = validation.KiemTraDoDaiChuoi("password","tbMatKhau","(*) Vui lòng nhập mật khẩu ít nhất có 1 chữ hoa, 1 chữ thường, 1 ký tự ĐB")
    isValid = validation.KiemTraChucVu();
    if (isValid)
    {
        //cap nhat tong luong
        //them vao mang
        mangNV.push(nhanVien);
        HienThi(mangNV);
    }
}


function HienThi(mangHienThi){
    // var content = "";
    var tableDanhSach = getEle("tableDanhSach");
    var content = "";
    for (var i = 0; i < mangHienThi.length; i++){
        var nhanVien = mangHienThi[i];
        //template string
        // content += content + `
        content += `
            <tr>
                <td>${nhanVien.maNhanVien}</td>
                <td>${nhanVien.tenNhanVien}</td>
                <td>${nhanVien.emailNV}</td>
                <td>${nhanVien.ngaySinhNV}</td>
                <td>${nhanVien.chucVuNV}</td>
                <td>${nhanVien.tongLuong}</td>
                <td>
                    <button class="btn btn-danger" data-id="${nhanVien.maNhanVien}" onclick="XoaNhanVien(event)">Xóa</button>
                    <button class="btn btn-info" data-id="${nhanVien.maNhanVien}" onclick="HienThiThongTinLenForm(event)" data-toggle="modal"
                    data-target="#myModal">Sửa</button>
                </td>
            </tr>
        `;
    }

    tableDanhSach.innerHTML = content;
}

//local storage : chỉ nhận vào kiểu dữ liệu là json
function LuuDuLieu(){
    //chuyển kiểu dữ liệu về kiểu JSON
    var jsonData = JSON.stringify(mangNV);
    //Lưu vào local storage : key value
    localStorage.setItem("DSNV", jsonData);
}

function LayDuLieu(){
    //Lấy dữ liệu từ local storage
    var jsonData = localStorage.getItem("DSNV");
    //chuyển kiểu dữ liệu
    mangNV = JSON.parse(jsonData);
    console.log(mangNV);
    HienThi(mangNV);
}

function TimViTri(id){
    // var index = -1;
    for (var i = 0; i < mangNV.length; i++){
        var nhanVien = mangNV[i];
        if(nhanVien.maNhanVien === id){
            // index = i;
            // break; thoát khỏi vòng lặp for
            return i;
        }
    }
    return -1;
    // return index
}

function XoaNhanVien(event){
    var btnXoa = event.target;
    var idXoa = btnXoa.getAttribute("data-id");
    //Lay tung nhan vien bang cach duyet mang
    for (var i = 0; i < mangNV.length; i++){
        if(mangNV[i].maNhanVien === idXoa){
            // console.log(mangNV[i]);
            mangNV.splice(mangNV[i],1);
            
            LuuDuLieu()
            HienThi(mangNV);
        }
    }

    // var index = TimViTri(idXoa);
    // mangNV.splice(index,1);
    
}

function HienThiThongTinLenForm(event){
    var btnSua = event.target;
    var idSua = btnSua.getAttribute("data-id");
    var index = TimViTri(idSua);
    var nhanVien = mangNV[index];

    //Hien Thi 
    getEle("msnv").value = nhanVien.maNhanVien;
    getEle("name").value = nhanVien.tenNhanVien;
    getEle("email").value = nhanVien.emailNV;
    getEle("password").value = nhanVien.matKhauNV;
    getEle("datepicker").value = nhanVien.ngaySinhNV;
    getEle("chucvu").value = nhanVien.chucVuNV;
    getEle("msnv").setAttribute("readOnly",true);
}


function CapNhatDuLieu(){
    //Lay thong tin
    var nhanVien = LayThongTin();
    //To chuc doi tuong

    // De len doi tuong can sua
    var index = TimViTri(nhanVien.maNhanVien);
    mangNV[index] = nhanVien;
    HienThi(mangNV);
}



function TimKiemNhanVien(){
    var mangNhanVienTimKiem = [];
    var keyword = getEle("searchName").value;
    keyword = keyword.toLowerCase().replace(/\s/g,'');
    // console.log(keyword);
    // for (var i = 0; i < mangNV.length; i++){
    //     if(mangNV[i].tenNhanVien.toLowerCase().replace(/\s/g,'') === keyword){
    //         mangNhanVienTimKiem.push(mangNV[i]);
    //     }
    // }
    // HienThi(mangNhanVienTimKiem);

    //JS es6
    mangNhanVienTimKiem = mangNV.filter(function (nhanVien) {
        return nhanVien.tenNhanVien.toLowerCase().replace(/\s/g,'').indexOf(keyword) !== -1;
    });
    // console.log(mangNhanVienTimKiem);
    HienThi(mangNhanVienTimKiem);

}

// Goi Ham thay cho onclick ben html 

// function -> hàm mặc danh

// getEle("btnThemNV").addEventListener("click", function(){
//     ThemNguoiDung()
// });

getEle("btnThemNV").addEventListener("click", ThemNguoiDung);

//local storage
getEle("btnLuuDL").addEventListener("click", LuuDuLieu);
getEle("btnLayDL").addEventListener("click", LayDuLieu);
getEle("btnCapNhat").addEventListener("click", CapNhatDuLieu);
getEle("btnTimNV").addEventListener("click", TimKiemNhanVien);
getEle("searchName").addEventListener("keyup", TimKiemNhanVien);


