const db = require('../fn/mysql-db');

exports.loadPointTable = function(mahocsinh, malop) {
  let sql = `select * from hocsinh_lophoc_monhoc where  mahocsinh = '${mahocsinh}' and malop = '${malop}'`;
  return db.load(sql);
};

exports.add = function(
  mahocsinh,
  malop,
  mamon,
  gvphutrach,
  chitiethk1,
  chitiethk2
) {
  var sql = `insert into hocsinh_lophoc_monhoc(mahocsinh, malop, mamon, diemhk1, diemhk2, gvphutrach) values('${mahocsinh}', '${malop}', '${mamon}', '${chitiethk1}', '${chitiethk2}', '${gvphutrach}')`;
  return db.insert(sql);
};

exports.changeTeacher = function(hocsinh_lophoc_monhoc, gvphutrach) {
  let sql = `update hocsinh_lophoc_monhoc set gvphutrach = N'${gvphutrach}' where mamon = '${
    hocsinh_lophoc_monhoc.mamon
  }' and mahocsinh = '${hocsinh_lophoc_monhoc.mahocsinh}' and malop = '${
    hocsinh_lophoc_monhoc.malop
  }'`;
  return db.update(sql);
};

exports.loadStudentByClass = function(malop) {
  let sql = `SELECT * from hocsinh where mahocsinh IN (SELECT DISTINCT mahocsinh FROM hocsinh_lophoc_monhoc where malop = '${malop}')`;
  return db.load(sql);
};
