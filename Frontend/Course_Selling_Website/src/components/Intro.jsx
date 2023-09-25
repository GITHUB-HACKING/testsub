import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import logo from './Logo.jpg';

function Intro(){
    const navigate = useNavigate()
    return (
    <div style={{paddingTop: 150,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center"}}>
        <Card sx={{ maxWidth: 400}}>
        <CardMedia
            component="img"
            alt="Academy Logo"
            height="250"
            src={logo}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Sheninth Jr's Academy
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Welcome to our course selling website, where knowledge meets opportunity! Explore a diverse range of high-quality courses taught by experts in various fields. Unlock your potential, acquire new skills, and achieve your goals.Start shaping your future today!
            </Typography>
        </CardContent>
        <CardActions style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button variant="contained" onClick={() => {
                                navigate("/signin")
                            }}>SignIn</Button>
            <Button variant="contained" onClick={() => {
                                navigate("/signup")
                            }}>Signup</Button>
        </CardActions>
        </Card>
    </div>);
}

export default Intro;