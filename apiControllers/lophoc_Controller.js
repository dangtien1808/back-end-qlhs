const express = require('express'),
  axios = require('axios');

const lophocRepo = require('../repos/lophoc_Repo');
const hocsinh_lophoc_Repo = require('../repos/hocsinh_lophoc_Repo');

const router = express.Router();

router.get('/', (req, res) => {
  lophocRepo
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
router.get('/info/:id', (req, res) => {
  let id = req.params.id;
  if (parseInt(id)) {
    lophocRepo
      .load(parseInt(id))
      .then(rows => {
        res.json(rows);
      })
      .catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
      });
  }
});

router.post('/add', (req, res) => {
  lophocRepo
    .add(req.body)
    .then(insertId => {
      res.statusCode = 201;
      res.json({
        insertId: insertId,
        tenlop: req.body.tenlop,
        namhoc: req.body.namhoc
      });
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('add giaovien Fail!.');
    });
});

router.post('/changedetail', (req, res) => {
  lophocRepo
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
  lophocRepo
    .delete(req.body.malop)
    .then(affectedRows => {
      if (affectedRows) {
        res.json({
          is_delete: true,
          affectedRows: affectedRows
        });
      } else {
        res.json({
          is_delete: false
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('delete giaovien Fail!.');
    });
});

router.get('/:id/students', (req, res) => {
  let id = req.params.id;
  hocsinh_lophoc_Repo
    .loadStudentByClass(id)
    .then(rows => {
      res.json(rows);
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('View error log on console.');
    });
});

module.exports = router;
