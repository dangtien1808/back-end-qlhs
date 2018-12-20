const db = require('../fn/mysql-db');

exports.loadAll = function() {
  let sql = 'select * from lophoc where xoa = 0';
  return db.load(sql);
};

exports.add = function(lophoc) {
  var sql = `insert into lophoc(tenlop, makhoi, sisotoida, giaovienchunhiem, namhoc, xoa) values(N'${
    lophoc.tenlop
  }', '${lophoc.makhoi}', '${lophoc.sisotoida}', '${
    lophoc.giaovienchunhiem
  }', '${lophoc.namhoc}', 0)`;
  return db.insert(sql);
};

exports.changeDetail = function(lophoc) {
  let sql = `update lophoc set tenlop = N'${lophoc.tenlop}', makhoi = '${
    lophoc.makhoi
  }', sisotoida = '${lophoc.sisotoida}', giaovienchunhiem = '${
    lophoc.giaovienchunhiem
  }', namhoc = N'${user.namhoc}' where malop = '${lophoc.malop}'`;
  return db.update(sql);
};

exports.delete = function(malop) {
  var sql = `update lophoc set xoa = 1 where malop = ${malop}`;
  return db.update(sql);
};
