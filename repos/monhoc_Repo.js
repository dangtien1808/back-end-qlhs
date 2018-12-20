const db = require('../fn/mysql-db');

exports.loadAll = function() {
  let sql = 'select * from monhoc';
  return db.load(sql);
};
