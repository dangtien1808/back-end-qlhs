-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 24, 2018 lúc 06:52 PM
-- Phiên bản máy phục vụ: 10.1.36-MariaDB
-- Phiên bản PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlhs`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietbangdiem`
--

CREATE TABLE `chitietbangdiem` (
  `machitiet` int(11) NOT NULL,
  `diemmieng` text COLLATE utf8_unicode_ci NOT NULL,
  `diem15phut` text COLLATE utf8_unicode_ci NOT NULL,
  `diem1tiet` text COLLATE utf8_unicode_ci NOT NULL,
  `diemgk` float NOT NULL,
  `diemck` float NOT NULL DEFAULT '-1',
  `diemtb` float NOT NULL,
  `xoa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `chitietbangdiem`
--

INSERT INTO `chitietbangdiem` (`machitiet`, `diemmieng`, `diem15phut`, `diem1tiet`, `diemgk`, `diemck`, `diemtb`, `xoa`) VALUES
(163, '4,6,6.5', '7,8,6.3,5,0', '4.5,7,10', 5.5, 6, 0, 0),
(164, '', '', '', 0, -1, 0, 0),
(165, '', '', '', 0, -1, 0, 0),
(166, '', '', '', 0, -1, 0, 0),
(167, '', '', '', 0, -1, 0, 0),
(168, '', '', '', 0, -1, 0, 0),
(169, '', '', '', 0, -1, 0, 0),
(170, '', '', '', 0, -1, 0, 0),
(171, '', '', '', 0, -1, 0, 0),
(172, '', '', '', 0, -1, 0, 0),
(173, '2,0,8', '8.5,3,10,9.5', '7,7.5,5.5,8.5', 8, 6.5, 0, 0),
(174, '', '', '', 0, -1, 0, 0),
(175, '', '', '', 0, -1, 0, 0),
(176, '', '', '', 0, -1, 0, 0),
(177, '', '', '', 0, -1, 0, 0),
(178, '', '', '', 0, -1, 0, 0),
(179, '', '', '', 0, -1, 0, 0),
(180, '', '', '', 0, -1, 0, 0),
(181, '', '', '', 0, -1, 0, 0),
(182, '', '', '', 0, -1, 0, 0),
(183, '', '', '', 0, -1, 0, 0),
(184, '', '', '', 0, -1, 0, 0),
(185, '', '', '', 0, -1, 0, 0),
(186, '', '', '', 0, -1, 0, 0),
(187, '', '', '', 0, -1, 0, 0),
(188, '', '', '', 0, -1, 0, 0),
(189, '', '', '', 0, -1, 0, 0),
(190, '', '', '', 0, -1, 0, 0),
(191, '', '', '', 0, -1, 0, 0),
(192, '', '', '', 0, -1, 0, 0),
(193, '', '', '', 0, -1, 0, 0),
(194, '', '', '', 0, -1, 0, 0),
(195, '', '', '', 0, -1, 0, 0),
(196, '', '', '', 0, -1, 0, 0),
(197, '', '', '', 0, -1, 0, 0),
(198, '', '', '', 0, -1, 0, 0),
(199, '', '', '', 0, -1, 0, 0),
(200, '', '', '', 0, -1, 0, 0),
(201, '', '', '', 0, -1, 0, 0),
(202, '', '', '', 0, -1, 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giaovien`
--

CREATE TABLE `giaovien` (
  `taikhoan` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `matkhau` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `hoten` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `gioitinh` int(11) NOT NULL,
  `sdt` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `diachi` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `ngaysinh` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `xoa` int(11) NOT NULL,
  `monhoc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `giaovien`
--

INSERT INTO `giaovien` (`taikhoan`, `matkhau`, `email`, `hoten`, `gioitinh`, `sdt`, `diachi`, `ngaysinh`, `xoa`, `monhoc`) VALUES
('admin', '123', 'dangvantien@gmail.com', 'đặng Văn Tiến', 0, '1231231231', '146/4', '1996-08-18', 0, 4),
('dangtien', 'dangtien', 'dangtien@gmail.com', 'Đặng Tiến', 0, '0123456789', '146/4', '1996-08-18', 0, 3),
('HoangVan', 'asdasd', 'vantien@gmail.com', 'vantien', 0, '3213121211', '123', '2018-12-04', 0, 9),
('vantien', 'vantien', 'vantien@gmail.com', 'vantien', 1, '3211231231', '1231', '2018-12-02', 0, 4),
('vantien1', 'vantien1', 'vantien@gmail.com1', 'vantien1', 1, '3213121211', '12', '2018-05-14', 0, 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hocsinh`
--

CREATE TABLE `hocsinh` (
  `mahocsinh` int(11) NOT NULL,
  `hoten` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ngaysinh` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `gioitinh` int(11) NOT NULL,
  `diachi` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sdt` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `xoa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hocsinh`
--

INSERT INTO `hocsinh` (`mahocsinh`, `hoten`, `ngaysinh`, `gioitinh`, `diachi`, `sdt`, `xoa`) VALUES
(1, 'Văn Tiến', '2018-01-01', 0, '123/1', '0123123123', 0),
(2, 'Đặng Tiến', '2011-01-01', 0, '123/2', '0123123123', 0),
(3, 'Văn Tiến 01', '2018-01-01', 0, '123/1', '0123123123', 1),
(4, 'Đặng Tiến 01', '2011-01-01', 0, '123/2', '0123123123', 1),
(5, 'Văn Tiến 02', '2018-01-01', 0, '123/1', '0123123123', 0),
(6, 'Đặng Tiến 02', '2011-01-01', 1, '123/2', '0123123123', 0),
(7, 'Nguyễn A', '2018-01-02', 1, '43/43', '0432432423', 1),
(8, 'Nguyễn B', '2011-01-03', 0, '123/2', '3213121323', 1),
(9, 'Nguyễn A 01', '2018-01-02', 1, '43/43', '0432432423', 0),
(10, 'Nguyễn B 01', '2011-01-03', 1, '123/2', '3213121323', 0),
(11, 'Nguyễn C', '2018-01-02', 1, '43/43', '0432432423', 1),
(12, 'Nguyễn D', '2011-01-03', 0, '123/2', '3213121323', 0),
(13, 'Hồng Vân', '2018-12-03', 1, 'ádasd', '1231231231', 0),
(14, 'van toàn', '2018-12-05', 0, '123', '3214312312', 0),
(15, '123123', '2018-12-05', 1, '123123', '123123', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hocsinh_lophoc_monhoc`
--

CREATE TABLE `hocsinh_lophoc_monhoc` (
  `mahocsinh` int(11) NOT NULL,
  `malop` int(11) NOT NULL,
  `mamon` int(11) NOT NULL,
  `diemtb` float NOT NULL,
  `diemhk1` int(11) NOT NULL,
  `diemhk2` int(11) NOT NULL,
  `gvphutrach` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `xoa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hocsinh_lophoc_monhoc`
--

INSERT INTO `hocsinh_lophoc_monhoc` (`mahocsinh`, `malop`, `mamon`, `diemtb`, `diemhk1`, `diemhk2`, `gvphutrach`, `xoa`) VALUES
(2, 5, 1, 0, 163, 173, 'dangtien', 0),
(2, 5, 2, 0, 164, 176, 'dangtien', 0),
(2, 5, 3, 0, 165, 180, 'dangtien', 0),
(2, 5, 4, 0, 166, 178, 'dangtien', 0),
(2, 5, 5, 0, 167, 181, 'dangtien', 0),
(2, 5, 6, 0, 168, 177, 'dangtien', 0),
(2, 5, 7, 0, 169, 179, 'dangtien', 0),
(2, 5, 8, 0, 170, 182, 'dangtien', 0),
(2, 5, 9, 0, 171, 174, 'dangtien', 0),
(2, 5, 10, 0, 172, 175, 'dangtien', 0),
(12, 5, 1, 0, 184, 200, 'dangtien', 0),
(12, 5, 2, 0, 183, 194, 'dangtien', 0),
(12, 5, 3, 0, 185, 197, 'dangtien', 0),
(12, 5, 4, 0, 192, 195, 'dangtien', 0),
(12, 5, 5, 0, 187, 199, 'dangtien', 0),
(12, 5, 6, 0, 188, 196, 'dangtien', 0),
(12, 5, 7, 0, 186, 201, 'dangtien', 0),
(12, 5, 8, 0, 189, 202, 'dangtien', 0),
(12, 5, 9, 0, 191, 198, 'dangtien', 0),
(12, 5, 10, 0, 190, 193, 'dangtien', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khoi`
--

CREATE TABLE `khoi` (
  `makhoi` int(11) NOT NULL,
  `tenkhoi` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `soluongloptoida` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `khoi`
--

INSERT INTO `khoi` (`makhoi`, `tenkhoi`, `soluongloptoida`) VALUES
(1, 'Khối 10', 12),
(2, 'Khối 11', 12),
(3, 'Khối 12', 12);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lophoc`
--

CREATE TABLE `lophoc` (
  `malop` int(11) NOT NULL,
  `tenlop` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `makhoi` int(11) NOT NULL,
  `sisotoida` int(11) NOT NULL,
  `giaovienchunhiem` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `namhoc` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `xoa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `lophoc`
--

INSERT INTO `lophoc` (`malop`, `tenlop`, `makhoi`, `sisotoida`, `giaovienchunhiem`, `namhoc`, `xoa`) VALUES
(1, '10a1', 1, 35, 'dangtien', '2011-2012', 1),
(2, '10a2', 1, 35, 'dangtien', '2011-2012', 1),
(3, '10a3', 1, 35, 'dangtien', '2011-2012', 1),
(4, '10a4', 1, 35, 'dangtien', '2011-2012', 1),
(5, '11a1', 2, 30, 'dangtien', '2011-2012', 0),
(6, '11a2', 2, 30, 'dangtien', '2011-2012', 0),
(7, '11a3', 2, 30, 'dangtien', '2011-2012', 1),
(8, '11a4', 2, 30, 'dangtien', '2011-2012', 0),
(9, '12a1', 3, 30, 'dangtien', '2011-2012', 0),
(10, '12a2', 3, 30, 'dangtien', '2011-2012', 0),
(11, '12a3', 3, 30, 'dangtien', '2011-2012', 0),
(12, '12a4', 3, 30, 'dangtien', '2011-2012', 0),
(13, '10a1', 1, 23, 'vantien1', 'ád', 1),
(14, '123', 2, 1, 'dangtien', '123', 1),
(15, '10a2', 1, 23, 'vantien1', 'ád', 1),
(16, '10a13', 1, 35, 'vantien1', '2017-2018', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `monhoc`
--

CREATE TABLE `monhoc` (
  `mamon` int(11) NOT NULL,
  `tenmon` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `monhoc`
--

INSERT INTO `monhoc` (`mamon`, `tenmon`) VALUES
(1, 'Toán'),
(2, 'Lý'),
(3, 'Hóa'),
(4, 'Anh Văn'),
(5, 'Ngữ Văn'),
(6, 'Sinh Học'),
(7, 'Lịch Sử'),
(8, 'Địa Lý'),
(9, 'Tin Học'),
(10, 'Công Nghệ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vipham`
--

CREATE TABLE `vipham` (
  `mavipham` int(11) NOT NULL,
  `mota` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ngayvipham` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `mahocsinh` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `vipham`
--

INSERT INTO `vipham` (`mavipham`, `mota`, `ngayvipham`, `mahocsinh`) VALUES
(1, 'hut thuoc', '2011-02-03', 3),
(2, 'dang nhau', '2011-05-05', 1),
(3, 'hut thuoc', '2011-01-03', 1),
(4, 'dang nhau', '2011-04-05', 5),
(5, 'hut thuoc', '2012-01-03', 10),
(6, 'dang nhau', '2012-04-05', 9),
(7, 'đánh bài', '2012-01-03', 8),
(8, 'trốn học', '2012-04-05', 4);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chitietbangdiem`
--
ALTER TABLE `chitietbangdiem`
  ADD PRIMARY KEY (`machitiet`);

--
-- Chỉ mục cho bảng `giaovien`
--
ALTER TABLE `giaovien`
  ADD PRIMARY KEY (`taikhoan`);

--
-- Chỉ mục cho bảng `hocsinh`
--
ALTER TABLE `hocsinh`
  ADD PRIMARY KEY (`mahocsinh`);

--
-- Chỉ mục cho bảng `hocsinh_lophoc_monhoc`
--
ALTER TABLE `hocsinh_lophoc_monhoc`
  ADD PRIMARY KEY (`mahocsinh`,`malop`,`mamon`);

--
-- Chỉ mục cho bảng `khoi`
--
ALTER TABLE `khoi`
  ADD PRIMARY KEY (`makhoi`);

--
-- Chỉ mục cho bảng `lophoc`
--
ALTER TABLE `lophoc`
  ADD PRIMARY KEY (`malop`);

--
-- Chỉ mục cho bảng `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`mamon`);

--
-- Chỉ mục cho bảng `vipham`
--
ALTER TABLE `vipham`
  ADD PRIMARY KEY (`mavipham`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `chitietbangdiem`
--
ALTER TABLE `chitietbangdiem`
  MODIFY `machitiet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=203;

--
-- AUTO_INCREMENT cho bảng `hocsinh`
--
ALTER TABLE `hocsinh`
  MODIFY `mahocsinh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `khoi`
--
ALTER TABLE `khoi`
  MODIFY `makhoi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `lophoc`
--
ALTER TABLE `lophoc`
  MODIFY `malop` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `monhoc`
--
ALTER TABLE `monhoc`
  MODIFY `mamon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `vipham`
--
ALTER TABLE `vipham`
  MODIFY `mavipham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
