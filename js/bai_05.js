/**
 * Đầu vào:
 *  + so
 *
 * Xử lí:
 *  + soHangDonvi = so % 10
 *  + soHangChuc = Math.floor(so / 10)
 *  + tong2KySo = soHangDonvi + soHangChuc
 *
 * Đầu ra:
 *  + Hiển thị tong2KySo
 */

document.getElementById('btnTinhTong2KySo').onclick = function () {
  // Đầu vào:
  var so = document.getElementById('so').value;

  // Xử lí:
  var soHangDonvi = so % 10;
  var soHangChuc = Math.floor(so / 10);
  var tong2KySo = soHangDonvi + soHangChuc;
  var ketQua = document.createElement('p');
  ketQua.innerHTML = `Tổng 2 ký số là: ${tong2KySo}`;

  // Đầu ra:
  document.getElementById('bai5').appendChild(ketQua);
};
