const express = require('express');
const {Admin,User,Course} = require('../database');
const jwt = require("jsonwebtoken");
const  {secretKey,authJwt} = require('../middleware/auth');

const router = express.Router();


router.post('/signup',async(req,res)=>{
    const {username,email,password}= req.body;
    const existingUser =await User.findOne({username});
    if(existingUser){
        res.status(401).json({message:"User Already Exists"});
    }else{
        const user= new User({username,email,password});
        await user.save();
        const token = jwt.sign({email},secretKey,{expiresIn:'1h'});
        res.json({message:"User Created Succesfully",token});
    }
});

router.post('/signin',async(req,res)=>{
    const {email,password} = req.headers;
    const existingUser = await User.findOne({email,password});
    if(existingUser){
        const token = jwt.sign({email},secretKey,{expiresIn:'1h'});
        res.json({message:"User Logined Successfully",token});
    }else{
        res.status(403).json({message:"Authentication Fails"});
    }
});

router.post('/courses/:courseId',authJwt,async(req,res)=>{
    const courseId = req.params.courseId;
    const course =await Course.findById(courseId);
    if(course){
        const user =await User.findOne({email:req.user.email});
        if(user){
            user.purchasedCourse.push(course);
            await user.save();
            res.json({message:"Course Purchased Successfully"});
        }else{
            res.status(402).json({message:"User Not Found"});
        }
    }else{
        res.status(403).json({message:"Course Not Found"});
    }
});

router.get('/courses',authJwt,(req,res)=>{
    const course = Course.find({});
    res.json({course});
})

router.get('/purchasedCourses',authJwt,async(req,res)=>{
    const user = await User.findOne({email:req.user.email}).populate('purchasedCourse');
    if(user){
        res.json({purchasedCourse:user.purchasedCourse||[]});
    }
    else{
        res.status(403).json({message:"No Courses Purchased"})
    }
});

module.exports = router