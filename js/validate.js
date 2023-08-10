function kiemTraDoDai(tagErr, name) {
  const nameRegex = /^([a-zA-Z0-9_-]){4,14}$/;
  if (nameRegex.test(name)) {
    document.getElementById(tagErr).innerText = "";
    return true;
  } else {
    document.getElementById(
      tagErr
    ).innerText = `Vui lòng nhập nội dung từ 4 đến 14 kí tự`;
    return false;
  }
}

function kiemTraEmail(tagErr, email) {
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (emailRegex.test(email)) {
    document.getElementById(tagErr).innerText = "";
    return true;
  } else {
    document.getElementById(tagErr).innerText = "Email không hợp lệ";
    return false;
  }
}
