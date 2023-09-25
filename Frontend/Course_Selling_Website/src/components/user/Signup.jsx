import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import { useState,useEffect } from 'react';
import axios from "axios";
import PopUp from "../appbar/PopUp";

function Signup(){
    const [username,setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPopUp, setShowPopUp] = useState(false);
    
    return(
    <div>
        <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"} gutterBottom>
                Welcome to Jr's Academy
                <Typography variant="overline" display="block" gutterBottom style={{display: "flex",
                justifyContent: "center"}}>
                SignUp Below
                </Typography>
                </Typography>
        </div >
        <div style={{display: "flex", justifyContent: "center",color:'white'}}>
        <Card varint={"outlined"} className="Login" style={{width: 350, padding: 20}}>
        <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth={true} onChange={(e)=>{setUsername(e.target.value);}}/>
        <br /><br />
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} onChange={(e)=>{setEmail(e.target.value);}}/>
        <br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" type={"password"} fullWidth={true} onChange={(e)=>{setPassword(e.target.value);}}/>
        <br /><br />
        <Button variant="contained" style={{marginLeft:130}}
        onClick={async () => {
            const res = await axios.post("http://localhost:3000/user/signup", {
                username: username,
                email:email,
                password: password
            }, {
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = res.data;
            if(data.token){
                setShowPopUp(true);
            }
            
            localStorage.setItem("token", data.token);
            window.location = "/"
        }}
        >SIGNUP</Button>
        </Card>
        </div>
        {showPopUp && <PopUp />}
    </div>);
}

export default Signup;