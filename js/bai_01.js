/**
 * Đầu vào:
 *  + luong1Ngay = 100000
 *  + soNgayLam
 *
 * Xử lí:
 *  + luongTong = luong1Ngay * soNgayLam
 *
 * Đầu ra:
 *  + Hiển thị luongTong
 */

document.getElementById('btnTinhLuongTong').onclick = function () {
  // Đầu vào:
  var luong1Ngay = 100000;
  var soNgayLam = document.getElementById('soNgayLam').value;

  // Xử lí:
  var formatVND = new Intl.NumberFormat('vn-Vn');
  var luongTong = luong1Ngay * soNgayLam;
  var ketQua = document.createElement('p');
  ketQua.innerHTML = `Tổng lương là: ${formatVND.format(luongTong)}`;

  // Đầu ra:
  document.getElementById('bai1').appendChild(ketQua);
};
