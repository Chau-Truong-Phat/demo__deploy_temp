const docClient = require('./config');

// //Read an user
// function getSinhVienById(params, callback) {
//     var params = {
//         TableName: "SinhVien",
//         Key:{
//             "ma_sinhvien": params.ma_sinhvien,
//             "id": parseInt(params.id)
//         },
//         "ProjectionExpression": "ma_sinhvien, id, ten_sinhvien, avatar, ma_lop, namsinh"
//     };
//     docClient.docClient.get(params, function(err, data) {
//         if (err) {
//             callback({message: err});
//         } else {
//             callback(data.Item);
//         }
//     });
// };
function getAll(callback){
    var params = {
        TableName: "SinhVien"
    };

    docClient.scan(params, onScan);

    function onScan(err, data) {
        if (err) {
            callback({message: err})
        } else {
            id = data.Count;
            callback(data);
        }
    }
};

// function add(param, callback) {
//     var params = {
//         TableName: "SinhVien",
//         Item:{
//             "avatar": param.avatar,
//             "ma_sinhvien": param.ma_sinhvien,
//             "id": ++id,
//             "ma_lop": param.ma_lop,
//             "namsinh": param.namsinh,
//             "ten_sinhvien": param.ten_sinhvien
//         }
//     };

//     docClient.docClient.put(params, function(err, data) {
//         if (err) {
//             callback({message: err})
//         } else {
//             callback({message: "Add new success user"});
//         }
//     });
// }

// function remove(param, callback) {
//     var params = {
//         TableName: "SinhVien",
//         Key:{
//             "ma_sinhvien": param.ma_sinhvien,
//             "id": parseInt(param.id)
//         }
//     };
        
//     docClient.docClient.delete(params, function(err, data) {
//         if (err) {
//             callback({message: err})
//         } else {
//             callback({message: "Delete success user"});
//         }
//     });
// }

// function edit(param, callback){
//     var params = {
//         TableName: "SinhVien",  
//         Key:{
//             "ma_sinhvien": param.ma_sinhvien,
//             "id": parseInt(param.id) 
//         },
//         UpdateExpression: "set ten_sinhvien = :tsv, avatar = :a, ma_lop = :ml, namsinh = :ns",
//         ExpressionAttributeValues:{
//             ":tsv": param.ten_sinhvien,
//             ":a": param.avatar,
//             ":ml": param.ma_lop,
//             ":ns": param.namsinh
//         },
//         ReturnValues:"UPDATED_NEW"
//       };
    
//       docClient.docClient.update(params, function(err, data) {
//           if (err) {
//               callback({message: err})
//           } else {
//               callback(data.Attributes);
//           }
//       });
// }

module.exports = getAll;
