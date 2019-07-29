//Tao lop doi tuong Nhan Vien

function NhanVien(maNV, tenNV, email, matKhau, ngaySinh, chucVu) {
    this.maNhanVien = maNV;
    this.tenNhanVien = tenNV;
    this.emailNV = email;
    this.matKhauNV = matKhau;
    this.ngaySinhNV = ngaySinh;
    this.chucVuNV = chucVu;
    this.LuongCB = 400;
    this.tongLuong = 0;
    //tổng lương = hệ số lương * lương cơ bản
    // -- sếp = 2
    // -- trưởng phòng = 1.5
    // -- nhân viên = 1
    this.tinhTongLuong = function () {
        if (this.chucVuNV == "Sếp") {
            this.tongLuong = this.LuongCB * 3;
        }
        else if (this.chucVuNV == "Trưởng phòng") {
            this.tongLuong = this.LuongCB * 1.5
        }
        else if (this.chucVuNV == "Nhân viên") {
            this.tongLuong = this.LuongCB;
        }
    }
}
