var router = require('express').Router();
var getAll = require("../public/javascripts/server");

router.get('/', function(req, res, next) {
  getAll((result) => {
    if(!result){
      console.log(error);
    }
    else{ 
      res.render('index', {listSinhVien: result.Items});
    }
  })
})

// router.get('/SinhVien/add',(req,res)=>{
//   return res.render('add');
// })
// router.post('/SinhVien/add',config.upload.array('avatar',1), (req, res) => {
//   var param = {
//     "avatar": req.file,
//     "ma_lop": req.body.ma_lop,
//     "ma_sinhvien": req.body.ma_sinhvien,
//     "namsinh": req.body.namsinh,
//     "ten_sinhvien": req.body.ten_sinhvien
//   }
//   server.add(param, (result) => {
//     if(result) {
//       res.redirect('/SinhVien');
//     } else {
//       console.log(false);
//     }
//   })
// });

// router.get('/SinhVien/:mssv&:id', function (req, res, next) {
//   let params = {
//     ma_sinhvien: req.params.mssv,
//     id: req.params.id
//   }
//   server.getSinhVienById(params, (result) => {
//     if(!result){
//       console.log(false);
//     } else {
//       console.log(result);
//       res.render('edit', {data: result});
//     }
//   });
// })

// router.get('/SinhVien/edit/:mssv&:id', function (req, res, next) {
//   let params = {
//     ma_sinhvien: req.params.mssv,
//     id: req.params.id
//   }
//   server.getSinhVienById(params, (result) => {
//     if(!result){
//       console.log(false);
//     } else {
//       res.render('edit', {data: result});
//     }
//   });
// })

// router.post('/SinhVien/edit/:mssv&:id', function(req, res, next) {
//   var param = {
//     "ma_sinhvien": req.params.mssv,
//     "id": req.params.id,
//     "avatar": "",
//     "ma_lop": req.body.ma_lop,
//     "namsinh": req.body.namsinh,
//     "ten_sinhvien": req.body.ten_sinhvien
//   }
//   console.log(param);
//   server.edit(param, (result) => {
//     if(!result){
//       console.log(false);
//     } else {
//       console.log(result);
//       res.redirect('/sinhvien');
//     }
//   })
// })

// router.get('/SinhVien/delete/:mssv&:id', function (req, res, next) {
//   let params = {
//     ma_sinhvien: req.params.mssv,
//     id: req.params.id
//   }
//   server.remove(params, (result) => {
//     if(!result){
//       console.log(false);
//     } else {
//       console.log(params);
//       res.redirect('/sinhvien');
//     }
//   });
// })
module.exports = router;
