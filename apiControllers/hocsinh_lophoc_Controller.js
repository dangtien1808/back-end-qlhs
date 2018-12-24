const express = require('express'),
  axios = require('axios');

const hocsinh_lophoc_Repo = require('../repos/hocsinh_lophoc_Repo');
const chitietbangdiem_Repo = require('../repos/chitietbangdiem_Repo');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.query.malop) {
    hocsinh_lophoc_Repo
      .loadPointTable(req.query.mahocsinh, req.query.malop)
      .then(rows => {
        let data = hocsinh_lophoc_Repo.avg(rows);
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
      });
  } else {
    hocsinh_lophoc_Repo
      .loadClassByCodeStudent(req.query.mahocsinh)
      .then(rows => res.json(rows))
      .catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console');
      });
  }
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
              .then(insertID => {
                res.json({
                  insertId: insertID,
                  mahocsinh: req.body.mahocsinh,
                  malop: req.body.malop
                });
              })
              .catch(err3 => {
                res.statusCode = 500;
                res.end('add 3 Fail!.');
              });
          })
          .catch(err2 => {
            res.statusCode = 500;
            res.end('add 2 fail');
          });
      })
      .catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('add 1 Fail!.');
      });
  }
});

router.post('/delete', (req, res) => {
  hocsinh_lophoc_Repo
    .delete(req.body.mahocsinh, req.body.malop)
    .then(affectedRows => {
      res.json({
        affectedRows: affectedRows,
        mahocsinh: req.body.mahocsinh,
        malop: req.body.malop
      });
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('delete giaovien Fail!.');
    });
});

module.exports = router;
