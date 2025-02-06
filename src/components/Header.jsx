import { Box } from "@mui/material";

const Header = ()=>{
    return (
        <Box
        sx={{
            width:'100%',
            height:'100px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            borderBottom:'2px solid #aaa',
            position:'fixed',
            top:'0px',
        }}>
            HEADER
        </Box>
    )
}

export default Header;