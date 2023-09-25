const mongoose = require('mongoose');
const express = require('express');
const {Admin,User,Course} = require('../database');
const jwt = require("jsonwebtoken");
const  {secretKey,authJwt} = require('../middleware/auth');

const router = express.Router();


router.get("/me", authJwt, async (req, res) => {
    const admin = await Admin.findOne({ username: req.user.username });
    if (!admin) {
      res.status(403).json({msg: "Admin doesnt exist"})
      return
    }
    res.json({
        username: admin.username
    })
});

router.post('/signup',async(req,res)=>{
    const {username,email,password} = req.body;
    const existingAdmin = await Admin.findOne({username});
    if(existingAdmin){
        res.status(401).json({message:"User Already Exists"});
    }
    else{
        const newAdmin = new Admin({username,email,password});
        await newAdmin.save();
        const token = jwt.sign({email},secretKey,{expiresIn :'1h'});
        res.json({message:"Admin Created Successfully",token});
    }
});

router.post('/signin',async(req,res)=>{
    const {email,password} = req.headers;
    const admin = await Admin.findOne({email,password});
    if(admin){
        const token = jwt.sign({email},secretKey,{expiresIn:'1h'});
        res.json({message:"Admin Logined Successfully",token});
    }else{
        res.status(403).json({message:"Authentication Fails"});
    }
});


router.post('/courses',authJwt,async(req,res)=>{
    const course = req.body;
    const existingCourse = await Course.findOne(course);
    if(existingCourse){
        res.json({message:"Course Already Exist"});
    }else{
        const crs= new Course(course);
        await crs.save();
        res.json({message:"Course Added Successfully"});
    }
});

router.get('/courses',authJwt,async(req,res)=>{
    const course = await Course.find({});
    res.json({course});
});

router.put('/courses/:courseId',authJwt,async(req,res)=>{
    const courseId =req.params.courseId;
    const course = await Course.findByIdAndUpdate(courseId,req.body,{new:true});
    if(course){
        res.json({message:"Course Updated Successfully"});
    }
    else{
        res.status(404).json({message:"Course Not Found"});
    }
});

router.get('/course/:courseId', authJwt, async (req, res) => {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    res.json({ course });
  });

module.exports = router