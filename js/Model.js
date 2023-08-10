function SinhVien(
  _ma,
  _ten,
  _email,
  _matkhau,
  _ngaySinh,
  _khoaHoc,
  _diemToan,
  _diemLy,
  _diemHoa
) {
  this.ma = _ma;
  this.ten = _ten;
  this.email = _email;
  this.matkhau = _matkhau;
  this.ngaySinh = _ngaySinh;
  this.khoaHoc = _khoaHoc;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  this.tinhDTB = function () {
    return (this.diemToan + this.diemLy + this.diemHoa) / 3;
  };
}
