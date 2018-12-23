const db = require('../fn/mysql-db');

exports.loadAll = function() {
  let sql = 'select * from hocsinh where xoa = 0';
  return db.load(sql);
};

exports.load = function(id) {
  let sql = `select * from hocsinh where mahocsinh =${id}`;
  return db.load(sql);
};

exports.add = function(hocsinh) {
  var sql = `insert into hocsinh(hoten, gioitinh, sdt, diachi, ngaysinh, xoa) values(N'${
    hocsinh.hoten
  }', '${hocsinh.gioitinh}', '${hocsinh.sdt}', N'${hocsinh.diachi}', '${
    hocsinh.ngaysinh
  }', 0)`;
  return db.insert(sql);
};

exports.delete = function(mahocsinh) {
  var sql = `update hocsinh set xoa = 1 where mahocsinh = ${mahocsinh}`;
  return db.update(sql);
};

exports.changeDetail = function(hocsinh) {
  let sql = `update hocsinh set hoten = N'${hocsinh.hoten}', gioitinh = '${
    hocsinh.gioitinh
  }', sdt = '${hocsinh.sdt}', diachi = N'${hocsinh.diachi}', ngaysinh = '${
    hocsinh.ngaysinh
  }' where mahocsinh = '${hocsinh.mahocsinh}'`;
  return db.update(sql);
};
