const express = require('express');
const userConstacts = require('../models/userContacts');

exports.postCommon = (req, res,next) =>{
  
    // const searchNumber = req.body.number;
    const sNum=123456;

     if(!sNum){
   
        return res.status(400).json({Error:"nomber not provide"})
     }

      userConstacts.findAll({where:{number:sNum},
      attribute: ['name','userId'],
    })
      .then((result)=>{
         
        const commonName = result[0].name;
        const commonuser = result.map((user)=>{
            return user.userId;
        })

        res.status(200).json({ name: commonName, commonUsers: commonuser})
      }).catch((err)=>{
        throw new Error(err)
      });



    
}

