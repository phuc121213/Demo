
import bcrypt from 'bcryptjs';
import db from '../../models/index';
// import db from '../../models/index';
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.Users.create({
                // maGV: data.maGV,
                // hoTen: data.hoTen,
                // // ngaySinh: DataTypes.DATE,
                // gioiTinh : data.gioiTinh === '1' ? true: false,
                // diaChi : data.diachi,
                // sdt: data.sdt,
                // email: data.email,
                // matKhau : hashPasswordFromBcrypt,
                
                //-----
                hoTen: data.hoTen,
                ngaySinh: data.ngaysinh,
                sdt: data.sdt,
                matKhau : hashPasswordFromBcrypt,
                gioiTinh : data.gioiTinh === '1' ? true: false,
                diaChi : data.diachi,
                email: data.email,
                // roleId: DataTypes.STRING,
            })
                resolve("OK create a new user successfully");
        } catch (e) {
            resolve(e);
            }
            })
    // let hashPasswordFromBcrypt = await hashUserPassword(data.password);
    // console.log("data from services");
    // console.log(data);
    // console.log(hashPasswordFromBcrypt)
    // return new Promise( async(resolve, reject) => {   
}

let hashUserPassword = (password) =>{
    return new Promise(async(resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password,salt);
            resolve(hashPassword);
        }catch (e) {
            resolve(e);
        //     assert.isNotOk(error,'Promise error');
        //     done();
        // }
        }
    })
}

let getAllUser = (req, res) => {
    return new Promise( async (resolve, reject) => {
        try {
            let users = db.Users.findAll({raw: true,});
            resolve(users);

        } catch (error) {
            reject(error);
        }
    });
}
let getUserInfoById = (userId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: userId,raw: true},
            })

            if (user){
                resolve(user)
            }
            else{
                resolve([])
            }
        } catch (error) {
            reject(error);
        }
    })
}
module.exports =  {
    createNewUser: createNewUser,
    hashUserPassword: hashUserPassword,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById
} 