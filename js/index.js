let dssv = [];
let jsonData = localStorage.getItem("DSSV");
if (jsonData) {
  let list = JSON.parse(jsonData);
  dssv = list.map(
    (el) =>
      new SinhVien(
        el.ma,
        el.ten,
        el.email,
        el.password,
        el.ngaySinh,
        el.khoaHoc,
        el.diemToan,
        el.diemLy,
        el.diemHoa
      )
  );
  renderDSSV(dssv);
}

function themSinhVien() {
  let sv = layThongTinTuForm();
  let isValid =
    kiemTraDoDai("spanTenSV", sv.ten) & kiemTraEmail("spanEmailSV", sv.email);
  if (!isValid) return;
  dssv.push(sv);

  let jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV", jsonData);
  renderDSSV(dssv);
}

function suaSinhVien(id) {
  let index = timViTri(id, dssv);
  showThongTin(index, dssv);
}

function xoaSinhVien(id) {
  let index = timViTri(id, dssv);
  dssv.splice(index, 1);
  let jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV", jsonData);
  renderDSSV(dssv);
}

function capNhatSinhVien() {
  let sv = layThongTinTuForm();
  let index = timViTri(sv.ma, dssv);
  dssv[index] = sv;
  let jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV", jsonData);
  renderDSSV(dssv);
  resetData();
}

function resetData() {
  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtNgaySinh").value = "";
  document.getElementById("khSV").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemLy").value = "";
  document.getElementById("txtDiemHoa").value = "";
  document.getElementById("txtMaSV").disabled = false;
}
