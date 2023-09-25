const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user')



app.use(cors());
app.use(express.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)


mongoose.connect("mongodb+srv://sheninthjr:Sheninth23@todo.on3kfnx.mongodb.net/course_selling", { useNewUrlParser: true, useUnifiedTopology: true});


app.listen(3000,()=>console.log("Server Starts Running"));