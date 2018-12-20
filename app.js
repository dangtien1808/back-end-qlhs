const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  cors = require('cors'),
  path = require('path');

const userCtrl = require('./apiControllers/user_Controller');
const giaovienCtrl = require('./apiControllers/giaovien_Controller');
const khoiCtrl = require('./apiControllers/khoi_Controller');
const lophocCtrl = require('./apiControllers/lophoc_Controller');
const monhocCtrl = require('./apiControllers/monhoc_Controller');
const hocsinhCtrl = require('./apiControllers/hocsinh_Controller');
const hocsinh_lophoc_Ctrl = require('./apiControllers/hocsinh_lophoc_Controller');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

const staticDir = express.static(path.resolve(__dirname, 'public'));
app.use(staticDir);

app.use('/users', userCtrl);
app.use('/subjects', monhocCtrl);
app.use('/teachers', giaovienCtrl);
app.use('/levelclass', khoiCtrl);
app.use('/class', lophocCtrl);
app.use('/students', hocsinhCtrl);
app.use('/studentclass', hocsinh_lophoc_Ctrl);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
