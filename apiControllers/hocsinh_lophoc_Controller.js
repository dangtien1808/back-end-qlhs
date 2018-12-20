const express = require('express'),
  axios = require('axios');

const hocsinh_lophoc_Repo = require('../repos/hocsinh_lophoc_Repo');

const router = express.Router();

router.get('/', (req, res) => {
  hocsinh_lophoc_Repo
    .loadAll(req.body.mahocsinh, req.body.malop)
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
  hocsinhRepo
    .add(req.body)
    .then(insertId => {
      res.statusCode = 201;
      res.json({
        insertId: insertId,
        hoten: req.body.hoten
      });
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('add giaovien Fail!.');
    });
});

router.post('/changedetail', (req, res) => {
  hocsinhRepo
    .changeDetail(req.body)
    .then(affectedRows => {
      if (affectedRows) {
        res.json({
          is_changedetail: true,
          affectedRows: affectedRows
        });
      } else {
        res.json({
          is_changedetail: false
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('change detail Fail!.');
    });
});

router.post('/delete', (req, res) => {
  hocsinhRepo
    .delete(req.body.mahocsinh)
    .then(affectedRows => {
      res.json({
        affectedRows: affectedRows,
        hoten: req.body.hoten
      });
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('delete giaovien Fail!.');
    });
});

module.exports = router;
