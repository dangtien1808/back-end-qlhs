const db = require('../fn/mysql-db');

exports.loadPointTable = function(mahocsinh, malop) {
  let sql = `select hlm.*, ct.diemmieng as diemmieng_hk1, ct.diem15phut as diem15_hk1, ct.diem1tiet as diem1t_hk1, ct.diemgk as diemgk_hk1, ct.diemck as diemck_hk1, ct2.diemmieng as diemmieng_hk2, ct2.diem15phut as diem15_hk2, ct2.diem1tiet as diem1t_hk2, ct2.diemgk as diemgk_hk2, ct2.diemck as diemck_hk2, l.tenlop, gv.hoten, m.tenmon from hocsinh_lophoc_monhoc hlm, chitietbangdiem ct, chitietbangdiem ct2, lophoc l, giaovien gv, monhoc m where hlm.mamon = m.mamon and hlm.diemhk1 = ct.machitiet and hlm.diemhk2 = ct2.machitiet and hlm.malop = l.malop and gv.taikhoan = hlm.gvphutrach and hlm.mahocsinh = '${mahocsinh}' and hlm.malop = '${malop}'`;
  return db.load(sql);
};

exports.add = function(
  mahocsinh,
  malop,
  mamon,
  gvphutrach,
  chitiethk1,
  chitiethk2
) {
  var sql = `insert into hocsinh_lophoc_monhoc(mahocsinh, malop, mamon, diemhk1, diemhk2, gvphutrach, xoa) values('${mahocsinh}', '${malop}', '${mamon}', '${chitiethk1}', '${chitiethk2}', '${gvphutrach}', 0)`;
  return db.insert(sql);
};

exports.changeTeacher = function(hocsinh_lophoc_monhoc, gvphutrach) {
  let sql = `update hocsinh_lophoc_monhoc set gvphutrach = N'${gvphutrach}' where mamon = '${
    hocsinh_lophoc_monhoc.mamon
  }' and mahocsinh = '${hocsinh_lophoc_monhoc.mahocsinh}' and malop = '${
    hocsinh_lophoc_monhoc.malop
  }'`;
  return db.update(sql);
};

exports.loadStudentByClass = function(malop) {
  let sql = `SELECT * from hocsinh where mahocsinh IN (SELECT DISTINCT mahocsinh FROM hocsinh_lophoc_monhoc where malop = '${malop}' and xoa = 0)`;
  return db.load(sql);
};
exports.loadDetailPoint = function(mahocsinh, malop, mamon, hocki) {
  if (parseInt(hocki) == 1) {
    let sql = `SELECT ct.* FROM chitietbangdiem ct, hocsinh_lophoc_monhoc hs_lh_mh  WHERE ct.machitiet = hs_lh_mh.diemhk1 and hs_lh_mh.mahocsinh = ${mahocsinh} and hs_lh_mh.malop = ${malop} and hs_lh_mh.mamon = ${mamon} and hs_lh_mh.xoa = 0`;
    return db.load(sql);
  } else {
    let sql = `SELECT ct.* FROM chitietbangdiem ct, hocsinh_lophoc_monhoc hs_lh_mh  WHERE ct.machitiet = hs_lh_mh.diemhk2 and hs_lh_mh.mahocsinh = ${mahocsinh} and hs_lh_mh.malop = ${malop} and hs_lh_mh.mamon = ${mamon} and hs_lh_mh.xoa = 0`;
    return db.load(sql);
  }
};
exports.loadTablePoint = function(malop, mamon, hocki) {
  if (parseInt(hocki) == 1) {
    let sql = `SELECT ct.*, hs.hoten FROM chitietbangdiem ct, hocsinh_lophoc_monhoc hs_lh_mh, hocsinh hs  WHERE hs.mahocsinh = hs_lh_mh.mahocsinh and ct.machitiet = hs_lh_mh.diemhk1 and hs_lh_mh.malop = ${malop} and hs_lh_mh.mamon = ${mamon} and hs_lh_mh.xoa = 0`;
    return db.load(sql);
  } else {
    let sql = `SELECT ct.*, hs.hoten FROM chitietbangdiem ct, hocsinh_lophoc_monhoc hs_lh_mh, hocsinh hs WHERE hs.mahocsinh = hs_lh_mh.mahocsinh and ct.machitiet = hs_lh_mh.diemhk2 and hs_lh_mh.malop = ${malop} and hs_lh_mh.mamon = ${mamon} and hs_lh_mh.xoa = 0`;
    return db.load(sql);
  }
};
exports.loadClassByCodeStudent = function(mahocsinh) {
  let sql = `SELECT * from lophoc where malop IN (SELECT DISTINCT malop FROM hocsinh_lophoc_monhoc where mahocsinh = '${mahocsinh}' and xoa = 0)`;
  return db.load(sql);
};

exports.delete = function(mahocsinh, malop) {
  let sql = `update hocsinh_lophoc_monhoc set xoa = 1 where mahocsinh = ${mahocsinh} and malop = ${malop}`;
  return db.update(sql);
};

exports.avg = function(rows) {
  let data = rows;
  rows.forEach((row, i) => {
    let TBHK1 = 0;
    let TBHK2 = 0;
    let TBNamHoc = 0;
    let sumPoint1 = 0;
    let numPoint1 = 0;

    let arrMiengHK1 = row.diemmieng_hk1.split(',');
    arrMiengHK1.forEach(point => {
      sumPoint1 += parseFloat(point);
      numPoint1++;
    });
    let arr15pHK1 = row.diem15_hk1.split(',');
    arr15pHK1.forEach(point => {
      sumPoint1 += parseFloat(point);
      numPoint1++;
    });
    let arr1tHK1 = row.diem1t_hk1.split(',');
    arr1tHK1.forEach(point => {
      sumPoint1 += parseFloat(point);
      numPoint1 += 2;
    });
    sumPoint1 += parseFloat(row.diemgk_hk1);
    numPoint1 += 2;
    sumPoint1 += parseFloat(row.diemck_hk1);
    numPoint1 += 3;
    if (isNaN(sumPoint1)) {
      sumPoint1 = 0;
    }

    TBHK1 = parseFloat(parseFloat(sumPoint1) / numPoint1).toFixed(2);
    let sumPoint2 = 0;
    let numPoint2 = 0;
    let arrMiengHK2 = row.diemmieng_hk2.split(',');
    arrMiengHK2.forEach(point => {
      sumPoint2 += parseFloat(point);
      numPoint2++;
    });
    let arr15pHK2 = row.diem15_hk2.split(',');
    arr15pHK2.forEach(point => {
      sumPoint2 += parseFloat(point);
      numPoint2++;
    });
    let arr1tHK2 = row.diem1t_hk2.split(',');
    arr1tHK2.forEach(point => {
      sumPoint2 += parseFloat(point);
      numPoint2 += 2;
    });
    sumPoint2 += parseFloat(row.diemgk_hk2);
    numPoint2 += 2;
    sumPoint2 += parseFloat(row.diemck_hk2);
    numPoint2 += 3;
    if (isNaN(sumPoint2)) {
      sumPoint2 = 0;
    }
    TBHK2 = parseFloat(parseFloat(sumPoint2) / numPoint2).toFixed(2);
    TBNamHoc = parseFloat(
      (parseFloat(TBHK1) + parseFloat(TBHK2) * 2) / 3
    ).toFixed(2);
    if (row.diemck_hk1 == -1) {
      data[i].diemtb_hk1 = '';
      data[i].diemtb_hk2 = '';
      data[i].diemtb_namhoc = '';
    } else if (row.diemck_hk1 != -1 && row.diemck_hk2 == -1) {
      data[i].diemtb_hk1 = TBHK1;
      data[i].diemtb_hk2 = '';
      data[i].diemtb_namhoc = '';
    } else if (row.diemck_hk2 != -1) {
      data[i].diemtb_hk1 = TBHK1;
      data[i].diemtb_hk2 = TBHK2;
      data[i].diemtb_namhoc = TBNamHoc;
    }
  });
  return data;
};
exports.avgClass = function(rows) {
  let data = rows;
  rows.forEach((row, i) => {
    let sumPoint1 = 0;
    let numPoint1 = 0;

    let arrMiengHK1 = row.diemmieng.split(',');
    arrMiengHK1.forEach(point => {
      sumPoint1 += parseFloat(point);
      numPoint1++;
    });
    let arr15pHK1 = row.diem15phut.split(',');
    arr15pHK1.forEach(point => {
      sumPoint1 += parseFloat(point);
      numPoint1++;
    });
    let arr1tHK1 = row.diem1tiet.split(',');
    arr1tHK1.forEach(point => {
      sumPoint1 += parseFloat(point);
      numPoint1 += 2;
    });
    sumPoint1 += parseFloat(row.diemgk);
    numPoint1 += 2;
    sumPoint1 += parseFloat(row.diemck);
    numPoint1 += 3;
    if (isNaN(sumPoint1)) {
      sumPoint1 = 0;
    }
    let TBHK1 = parseFloat(parseFloat(sumPoint1) / numPoint1).toFixed(2);
    if (row.diemck == -1) {
      data[i].diemtb = '';
    } else {
      data[i].diemtb = TBHK1;
    }
  });
  return data;
};
