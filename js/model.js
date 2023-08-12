function SinhVien (_ma, _ten, _email, _matKhau, _toan, _ly, _hoa) {
  this.ma = _ma;
  this.ten = _ten;
  this.email = _email;
  this.matKhau = _matKhau;
  this.toan = _toan;
  this.ly = _ly;
  this.hoa = _hoa;
  this.tinhDTB = function() {
    return (this.toan + this.ly + this.hoa) / 3
  }
}

function timViTri(id, dssv) {
  return dssv.findIndex(function(sv) {
    return sv.ma == id
  })
}

function showThongTinLenForm(sv) {
  document.getElementById("txtMaSV").value = sv.ma
  document.getElementById("txtTenSV").value = sv.ten
  document.getElementById("txtEmail").value = sv.email
  document.getElementById("txtPass").value = sv.matKhau
  document.getElementById("txtDiemToan").value = sv.toan
  document.getElementById("txtDiemLy").value = sv.li
  document.getElementById("txtDiemHoa").value = sv.hoa
}

function layThongTinTuForm() {
  var _ma = document.getElementById("txtMaSV").value
  var _ten = document.getElementById("txtTenSV").value
  var _email = document.getElementById("txtEmail").value
  var _matKhau = document.getElementById("txtPass").value
  var _toan = document.getElementById("txtDiemToan").value * 1
  var _ly = document.getElementById("txtDiemLy").value * 1
  var _hoa = document.getElementById("txtDiemHoa").value * 1
  return new SinhVien(_ma, _ten, _email, _matKhau, _toan, _ly, _hoa)
}