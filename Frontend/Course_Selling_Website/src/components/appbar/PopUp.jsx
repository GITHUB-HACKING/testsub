import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React, { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function PopUp(){
    const [showPopUp, setShowPopUp] = useState(true);
    const items = [
        { title: 'Signup was successfully done', color: 'success', icon: <CheckCircleIcon /> }
      ];
    
    useEffect(()=>{const timer = setTimeout(() => {
        setShowPopUp(false);
      }, 3000);return () => clearTimeout(timer);
    }, []);
    if (!showPopUp) {
        return null;
      }
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'fixed',
            bottom: '5%',
            left: '50%',
            transform: 'translate(-50%, 0)',
            width: '25%',
            zIndex: 9999,
          }}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column' }}>
            {items.map(({ title, color, icon }) => (
            <Alert
                key={title}
                sx={{ alignItems: 'flex-start' }}
                startDecorator={React.cloneElement(icon, {
                sx: { mt: '2px', mx: '4px' },
                fontSize: 'xl2',
                })}
                variant="soft"
                color={color}
                endDecorator={
                <IconButton variant="soft" size="sm" color={color}>
                    <CloseRoundedIcon />
                </IconButton>
                }
                >
                <div>
                <Typography fontWeight="lg" mt={0.25}>
                {title}
                </Typography>
                <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
                Welcome to our Website.
                </Typography>
                </div>
            </Alert>
              ))}
            </Box>
        </div>
        );
}

export default PopUp;