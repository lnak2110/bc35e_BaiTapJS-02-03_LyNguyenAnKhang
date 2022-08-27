/**
 * Đầu vào:
 *  + so1
 *  + so2
 *  + so3
 *  + so4
 *  + so5
 *
 * Xử lí:
 *  + tongCacSoThuc = so1 + so2 + so3 + so4 + so5
 *  + giaTriTrungBinh = tongCacSoThuc / 5
 *
 * Đầu ra:
 *  + Hiển thị giaTriTrungBinh
 */

document.getElementById('btnTinhTB').onclick = function () {
  // Đầu vào:
  var so1 = document.getElementById('so1').value * 1;
  var so2 = document.getElementById('so2').value * 1;
  var so3 = document.getElementById('so3').value * 1;
  var so4 = document.getElementById('so4').value * 1;
  var so5 = document.getElementById('so5').value * 1;

  // Xử lí:
  var tongCacSoThuc = so1 + so2 + so3 + so4 + so5;
  var giaTriTrungBinh = tongCacSoThuc / 5;
  var ketQua = document.createElement('p');
  ketQua.innerHTML = `Giá trị trung bình của 5 số thực là: ${giaTriTrungBinh}`;

  // Đầu ra:
  document.getElementById('bai2').appendChild(ketQua);
};
