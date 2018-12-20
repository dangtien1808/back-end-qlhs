const db = require('../fn/mysql-db');

exports.load = function(machitiet) {
  let sql = `select * from chitietbangdiem where machitiet = '${machitiet}' and xoa = 0`;
  return db.load(sql);
};

exports.add = function() {
  var sql = `insert into chitietbangdiem(diemmieng, diem15phut, diem1tiet, diemgk, diemck, xoa) values( '','','',null,null,0)`;
  return db.insert(sql);
};

exports.changeDetail = function(chitietbangdiem) {
  let sql = `update chitietbangdiem set diemmieng = N'${
    chitietbangdiem.diemmieng
  }', diem15phut = '${chitietbangdiem.diem15phut}', diem1tiet = '${
    chitietbangdiem.diem1tiet
  }', diemgk = '${chitietbangdiem.diemgk}', diemck ='${
    chitietbangdiem.diemck
  }' where machitiet = '${chitietbangdiem.machitiet}'`;
  return db.update(sql);
};
