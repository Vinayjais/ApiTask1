const express = require('express');
const userConstacts = require('../models/userContacts');
const { Op } = require('sequelize');

exports.postContactsByUserId =(req,res,next)=>{
     
     const userId = req.params.userId;
     const page = req.params.page;
     const pagesize= req.params.size;
     const searchName= req.body.searchName;
   //  const searchName= 'vin';
     let offData = (page - 1) * 10;
    
    console.log(searchName)
     if(!userId){
        res.status(400).json({message:"User Id not found"})
     }
     
     if(!searchName){
      userConstacts.findAll({where:{userId: userId},
         attributes:['name','number'] ,
          limit: 10,
          offset:offData
   })
    .then((contacts)=>{
   
       let count=0;
       let totalCount = contacts.map(element => {
            
             count++;
             return count;
        });

        res.status(200).json({totalCount: totalCount.length, rows: contacts});

    })
    .catch((error) =>{
       throw new Error(error);
    })
   
     }

     if(searchName && userId){
      userConstacts.findAll({where:{userId: userId , name:{[Op.like]: `%${searchName}%`}},
         attributes:['name','number'] ,
          limit: 10,
          offset:offData
   })
    .then((contacts)=>{
   
       let count=0;
       let totalCount = contacts.map(element => {
            
             count++;
             return count;
        });

        res.status(200).json({totalCount: totalCount.length, rows: contacts});

    })
    .catch((error) =>{
       throw new Error(error);
    })
   
     }
     
};