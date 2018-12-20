const express = require('express'),
  axios = require('axios');

const userRepo = require('../repos/userRepo');

const router = express.Router();

router.post('/login', (req, res) => {
  userRepo
    .login(req.body.taikhoan, req.body.matkhau)
    .then(userObj => {
      if (userObj) {
        res.json({
          is_login: true,
          user: userObj
        });
      } else {
        res.json({
          is_login: false
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('Login Fail!.');
    });
});

router.post('/changepwd', (req, res) => {
  userRepo
    .changePassword(req.body.taikhoan, req.body.matkhau)
    .then(affectedRows => {
      if (affectedRows) {
        res.json({
          is_changepwd: true,
          affectedRows: affectedRows
        });
      } else {
        res.json({
          is_changepwd: false
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.statusCode = 500;
      res.end('change password Fail!.');
    });
});

router.post('/changedetail', (req, res) => {
  userRepo
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

module.exports = router;
