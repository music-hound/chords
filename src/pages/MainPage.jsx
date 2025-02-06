import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const MainPage = ()=>{
    const dispatch = useDispatch()
    return (
        <Box
        sx={{
            width:'100%',
            height:'100vh',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Typography
            sx={{
                fontSize:'50px',
            }}>
                hello world
            </Typography>
            
            <Button
            variant="outlined"
            onClick={()=>{
                dispatch( { type:'TOGGLE_THEME' } )
            }}
            >
                change theme
            </Button>
        </Box>
    )
}

export default MainPage;