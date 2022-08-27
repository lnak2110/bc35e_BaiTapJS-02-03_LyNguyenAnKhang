/**
 * Đầu vào:
 *  + chieuDai
 *  + chieuRong
 *
 * Xử lí:
 *  + dienTich = chieuDai * chieuRong
 *  + chuVi = (chieuDai + chieuRong) * 2
 *
 * Đầu ra:
 *  + Hiển thị dienTich
 *  + Hiển thị chuVi
 */

document.getElementById('btnTinhHCN').onclick = function () {
  // Đầu vào:
  var chieuDai = document.getElementById('chieuDai').value * 1;
  var chieuRong = document.getElementById('chieuRong').value * 1;

  // Xử lí:
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  var ketQua = document.createElement('p');
  ketQua.innerHTML = `Diện tích của hình chữ nhật là: ${dienTich}<br>
   Chu vi của hình chữ nhật là: ${chuVi}`;

  // Đầu ra:
  document.getElementById('bai4').appendChild(ketQua);
};
