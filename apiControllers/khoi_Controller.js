const express = require('express'),
  axios = require('axios');

const khoiRepo = require('../repos/khoi_Repo');

const router = express.Router();

router.get('/', (req, res) => {
  khoiRepo
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

module.exports = router;
