dssv = []


function themSv() {
  var sv = layThongTinTuForm()
  dssv.push(sv)
  console.log("🚀 ~ file: main.js:6 ~ themSv ~ dssv:", dssv)
  renderDSSV(dssv)
}

function xoaSV(id) {
  var index = timViTri(id, dssv)
  dssv.splice(index, 1)
  console.log("🚀 ~ file: main.js:13 ~ xoaSV ~ dssv:", dssv)
  renderDSSV(dssv)
}

function suaSV(id) {
  var index = timViTri(id, dssv)
  var sv = dssv[index]
  showThongTinLenForm(sv)
}

function capNhatSv() {
  var sv = layThongTinTuForm()
  var index = timViTri(sv.ma, dssv)
  dssv[index] = sv
  renderDSSV(dssv)
}