function layThongTinTuForm() {
  let ma = document.getElementById("txtMaSV").value * 1;
  let ten = document.getElementById("txtTenSV").value;
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPass").value;
  let ngaySinh = document
    .getElementById("txtNgaySinh")
    .value.split("-")
    .reverse()
    .join("/");
  let khoaHoc = document.getElementById("khSV").value;
  let diemToan = document.getElementById("txtDiemToan").value * 1;
  let diemLy = document.getElementById("txtDiemLy").value * 1;
  let diemHoa = document.getElementById("txtDiemHoa").value * 1;
  return new SinhVien(
    ma,
    ten,
    email,
    password,
    ngaySinh,
    khoaHoc,
    diemToan,
    diemLy,
    diemHoa
  );
}

function renderDSSV(dssv) {
  let contentHTML = "";
  let tbody = document.getElementById("tbodySinhVien");
  dssv.forEach((el) => {
    let contentTr = `
        <tr>
            <td>${el.ma}</td>
            <td>${el.ten}</td>
            <td>${el.email}</td>
            <td>${el.ngaySinh}</td>
            <td>${el.khoaHoc}</td>
            <td>${el.tinhDTB()}</td>
            <td class="d-flex">
            <button class="btn btn-info mx-1" onclick="suaSinhVien('${
              el.ma
            }')">Sửa</button>
            <button class="btn btn-danger mx-1" onclick="xoaSinhVien('${
              el.ma
            }')">Xóa</button>
            </td>
        </tr>`;
    contentHTML += contentTr;
  });
  tbody.innerHTML = contentHTML;
}

function timViTri(id, dssv) {
  return dssv.findIndex((el) => el.ma == id);
}

function showThongTin(id, dssv) {
  document.getElementById("txtMaSV").value = dssv[id].ma;
  document.getElementById("txtTenSV").value = dssv[id].ten;
  document.getElementById("txtEmail").value = dssv[id].email;
  document.getElementById("txtPass").value = dssv[id].password;
  document.getElementById("txtNgaySinh").value = dssv[id].ngaySinh
    .split("/")
    .reverse()
    .join("-");
  document.getElementById("khSV").value = dssv[id].khoaHoc;
  document.getElementById("txtDiemToan").value = dssv[id].diemToan;
  document.getElementById("txtDiemLy").value = dssv[id].diemLy;
  document.getElementById("txtDiemHoa").value = dssv[id].diemHoa;
  document.getElementById("txtMaSV").disabled = true;
}
