

const express = require('express');
const bcrypt = require('bcrypt');
const userConstacts = require('../models/userContacts')

exports.postSyncContacts =(req,res,next) =>{

    const { userId, Contacts} = req.body;
   //   userId=3;
   //  let  Contacts=[{name :'monu', number:'1234'},
   //   {name :'Rahul', number:'123456'},
   //   {name :'monu', number:'1234'},
   //   {name :'monu', number:'12344'}
     
   //  ];


     if(!userId || !Contacts){
        throw new Error('Invalid data format');
     }


    let check ={};
     let data=[];

     for(let i=0; i<Contacts.length;i++){
      if(check[Contacts[i].number] != true){
         check[Contacts[i].number] = true;
          data.push(Contacts[i]);
       }
     }
    
  
      // console.log(data)
         
     try {
      
        data.forEach(contact => {
            let {name,number} =contact;
          
         
               
            userConstacts.create({
               name: name,
               number: number,
               userId: userId
             })
    
         });
    
      
        res.status(200).json({success: true, message:"data saved successfully"})
     } catch (error) {
        throw new Error(error)
     }

    

};



