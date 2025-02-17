import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const Progression = ()=>{
    const dispatch = useDispatch()
    return (
        <Box
        sx={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Typography
            sx={{
                fontSize:'30px',
            }}>
                Progression page
            </Typography>

        </Box>
    )
}

export default Progression;