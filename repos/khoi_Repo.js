const db = require('../fn/mysql-db');

exports.loadAll = function() {
  let sql = 'select * from khoi';
  return db.load(sql);
};
