import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import { useState } from 'react';
import axios from "axios";

function Signin(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
                SignIn Below
                </Typography>
                </Typography>
        </div >
        <div style={{display: "flex", justifyContent: "center",color:'white'}}>
        <Card varint={"outlined"} className="Login" style={{width: 350, padding: 20}}>
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} onChange={(e)=>{setEmail(e.target.value);}}/>
        <br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" type={"password"} fullWidth={true} onChange={(e)=>{setPassword(e.target.value);}}/>
        <br /><br />
        <div style={{display:'flex'}}>
        <Button variant="contained" style={{marginLeft:130}}
        onClick={async () => {
            const res = await axios.post("http://localhost:3000/user/signin", {
                email:email,
                password: password
            }, {
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = res.data;
            localStorage.setItem("token", data.token);
            window.location = "/"
        }}
        >SIGNIN</Button>
        </div>
        
        
        </Card>
        </div>
    </div>);
}

export default Signin;