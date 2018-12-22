// var md5 = require('crypto-js/md5');
const db = require('../fn/mysql-db');

exports.login = function(taikhoan, matkhau) {
  console.log(matkhau);
  return new Promise((resolve, reject) => {
    // let md5_password = md5(password);
    let sql = `select * from giaovien where taikhoan = '${taikhoan}' and matkhau = '${matkhau}'`;
    db.load(sql)
      .then(rows => {
        if (rows.length === 0) {
          resolve(null);
        } else {
          let user = rows[0];
          resolve(user);
        }
      })
      .catch(err => reject(err));
  });
};

exports.changePassword = function(taikhoan, matkhau) {
  // let md5_password = md5(password);

  let sql = `update giaovien set matkhau = '${matkhau}' where taikhoan = '${taikhoan}'`;
  return db.update(sql);
};

exports.changeDetail = function(user) {
  let sql = `update giaovien set hoten = N'${user.hoten}', email = '${
    user.email
  }', gioitinh = '${user.gioitinh}', sdt = '${user.sdt}', diachi = N'${
    user.diachi
  }', ngaysinh = '${user.ngaysinh}' where taikhoan = '${user.taikhoan}'`;
  return db.update(sql);
};
