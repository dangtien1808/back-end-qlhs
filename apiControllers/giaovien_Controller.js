const express = require('express'),
  axios = require('axios');

const giaovienRepo = require('../repos/giaovien_Repo');

const router = express.Router();

router.get('/', (req, res) => {
  giaovienRepo
    .loadAll()
    .then(rows => {
      res.json(rows);
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('View error log on console.');
    });
});

router.post('/add', (req, res) => {
  giaovienRepo
    .add(req.body)
    .then(insertId => {
      res.statusCode = 201;
      res.json({
        insertId: insertId,
        taikhoan: req.body.taikhoan
      });
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('add giaovien Fail!.');
    });
});

router.post('/delete', (req, res) => {
  giaovienRepo
    .delete(req.body.taikhoan)
    .then(affectedRows => {
      res.json({
        affectedRows: affectedRows,
        taikhoan: req.body.taikhoan
      });
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('delete giaovien Fail!.');
    });
});

module.exports = router;
