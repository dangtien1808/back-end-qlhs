const db = require('../fn/mysql-db');

exports.loadAll = function() {
  let sql = 'select * from giaovien where xoa = 0';
  return db.load(sql);
};

exports.add = function(giaovien) {
  var sql = `insert into giaovien(taikhoan, matkhau, email, hoten, gioitinh, sdt, diachi, ngaysinh, xoa) values('${
    giaovien.taikhoan
  }', '${giaovien.matkhau}', '${giaovien.email}', N'${giaovien.hoten}', '${
    giaovien.gioitinh
  }', '${giaovien.sdt}', N'${giaovien.diachi}', '${giaovien.ngaysinh}', 0)`;
  return db.insert(sql);
};

exports.delete = function(taikhoan) {
  var sql = `update giaovien set xoa = 1 where taikhoan = ${taikhoan}`;
  return db.update(sql);
};
