function Validation(){
    //Kiem tra rong
    this.KiemTraRong = function (idInput, idThongBao, noiDungTB) {
        var value = getEle(idInput).value;
        var isValid = true;
        if (value === ""){
            isValid = false;
            getEle(idThongBao).style.display = "block";
            getEle(idThongBao).innerHTML = noiDungTB;
        }
        else{
            getEle(idThongBao).innerHTML = "";
        }
        return isValid;
    }
    
    //Kiem tra dinh dang chu
    this.KiemTraDinhDangChu = function (idInput, idThongBao, noiDungTB) {
        var value = getEle(idInput).value;
        var isValid = true;
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        if (!pattern.test(value)){
            isValid = false;
            getEle(idThongBao).style.display = "block";
            getEle(idThongBao).innerHTML = noiDungTB;
        }
        else{
            getEle(idThongBao).innerHTML = "";
        }
        return isValid;
    }

    //Kiem tra email
    this.KiemTraEmail = function (idInput, idThongBao, noiDungTB) {
        var value = getEle(idInput).value;
        var isValid = true;
        var pattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
		+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
        if (!pattern.test(value)){
            isValid = false;
            getEle(idThongBao).style.display = "block";
            getEle(idThongBao).innerHTML = noiDungTB;
        }
        else{
            getEle(idThongBao).innerHTML = "";
        }
        return isValid;
    }

    //Kiem tra password
    this.KiemTraPassword = function (idInput, idThongBao, noiDungTB) {
        var value = getEle(idInput).value;
        var isValid = true;
        var pattern = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$");
        if (!pattern.test(value)){
            isValid = false;
            getEle(idThongBao).style.display = "block";
            getEle(idThongBao).innerHTML = noiDungTB;
        }
        else{
            getEle(idThongBao).innerHTML = "";
        }
        return isValid;
    }

    //KiemTraDoDaiChuoi
    this.KiemTraDoDaiChuoi = function (idInput, idThongBao, noiDungTB, min, max) {
        var value = getEle(idInput).value;
        var isValid = true;
        if (value.length < min || value.length > max){
            isValid = false;
            getEle(idThongBao).style.display = "block";
            getEle(idThongBao).innerHTML = noiDungTB;
        }
        else{
            getEle(idThongBao).innerHTML = "";
        }
        return isValid;
    }

    //KiemTraChucVu
    this.KiemTraChucVu = function () {
        var chucVuELm = getEle("chucvu");
        var isValid = true;
        if (chucVuELm.selectedIndex === 0){
            isValid = false;
            getEle("chucvu").style.display = "block";
            getEle("chucvu").innerHTML = "(*) Vui lòng chọn chức vụ";
        }
        else{
            getEle("chucvu").innerHTML = "";
        }
        return isValid;
    }
}