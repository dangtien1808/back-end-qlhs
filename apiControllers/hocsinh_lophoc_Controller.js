const express = require('express'),
  axios = require('axios');

const hocsinh_lophoc_Repo = require('../repos/hocsinh_lophoc_Repo');
const chitietbangdiem_Repo = require('../repos/chitietbangdiem_Repo');
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
  for (let i = 1; i <= 10; i++) {
    chitietbangdiem_Repo
      .add()
      .then(machitiet1 => {
        chitietbangdiem_Repo
          .add()
          .then(machitiet2 => {
            hocsinh_lophoc_Repo
              .add(
                req.body.mahocsinh,
                req.body.malop,
                i,
                req.body.gvphutrach,
                machitiet1,
                machitiet2
              )
              .then(insertId => {
                console.log(insertId);
              })
              .catch(err3 => {
                console.log(err3);
                res.statusCode = 500;
                res.end('add giaovien Fail!.');
              });
          })
          .catch(err2 => {
            console.log(err2);
            res.statusCode = 500;
            res.end('add giaovien Fail!.');
          });
      })
      .catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('add giaovien Fail!.');
      });
  }
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
