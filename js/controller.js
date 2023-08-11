function renderDSSV(dssv) {
  var contentHTML = ""
  for (var i = 0; i < dssv.length; i++) {
    var data = dssv[i]
    var contentTr = `<tr>
                          <td>${data.ma}</td>
                          <td>${data.ten}</td>
                          <td>${data.email}</td>
                          <td>${data.tinhDTB()}</td>
                          <td>
                              <button class = "btn btn-primary" onclick = "suaSV('${data.ma}')">Sửa</button>
                              <button class = "btn btn-danger" onclick = "xoaSV('${data.ma}')">Xóa</button>
                          </td>
                      </tr>`
    contentHTML = contentHTML + contentTr
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML
}