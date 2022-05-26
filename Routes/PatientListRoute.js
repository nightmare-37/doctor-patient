const express=require("express");
const router=express.Router();

const patients=require("../Model/patientModel");

router.get("/patientList",(req,res)=>{

  patients.find((err,patientList)=>{
    if(err){
      console.log("DataBase Error");
    }
    else {
      res.send(patientList);
    }
  });

});

module.exports=router;

