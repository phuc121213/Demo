
import express from "express";
import db from '../../models/index';
import CRUDservices from '../services/CRUDservices';


let getHomePage = async(req, res) =>{
    try {
        let data = await db.Users.findAll(); //-----------------------
        // console.log('-----------------------');
        // console.log(data);
        // console.log('-----------------------');
        
        return res.render("homepage.ejs",{
            data: JSON.stringify(data)
        });
    }
    catch (e){
        console.log(e)
    }
    
}
let getAboutPage = (req, res) =>{
    return res.render("test/about.ejs");
}

let  getCRUD = (req, res) =>    {
    return res.render("crud.ejs");
}
//them thong tin nguoi dung
let postCRUD = async (req, res) => {
    // await CRUDservices.createNewUser(req.body);
     let message = await CRUDservices.createNewUser(req.body);
     console.log(message);
    return res.send("post CRUD from server"); 
};
// hien thi thong tin nguoi dung
let displayGetCRUD = async (req, res) => {

    let data = await CRUDservices.getAllUser()
    
    console.log('--------------------------------');
    console.log(data);
    console.log('--------------------------------');
    return res.render('displayCRUD.ejs',{
        dataTable: data
    });

}
// Sua thong tin nguoi dung
let  getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log('day la userid:',userId)
    if (userId) {
        let userData = await CRUDservices.getUserInfoById(userId);
        console.log('-------------------------------------------------------------------------');
        console.log(userData);
        console.log('----------------------------------------------------------------');
        return res.send('found a user');
    }
    else{
        return res.send('user not found');
    }

    
};
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage, 
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD
}