/**
 * Đầu vào:
 *  + gia1USD = 23500
 *  + soTienUSD
 *
 * Xử lí:
 *  + soTienVND = gia1USD * soUSDCanDoi
 *
 * Đầu ra:
 *  + Hiển thị soTienVND
 */

document.getElementById('btnDoiTien').onclick = function () {
  // Đầu vào:
  var gia1USD = 23500;
  var soTienUSD = document.getElementById('soTienUSD').value;

  // Xử lí:
  var formatVND = new Intl.NumberFormat('vn-Vn');
  var soTienVND = gia1USD * soTienUSD;
  var ketQua = document.createElement('p');
  ketQua.innerHTML = `Số tiền sau khi quy đổi ra VND là: ${formatVND.format(
    soTienVND
  )} VND`;

  // Đầu ra:
  document.getElementById('bai3').appendChild(ketQua);
};
