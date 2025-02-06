import { Box } from "@mui/material";

const Footer = ()=>{
    return (
        <Box
        sx={{
            width:'100%',
            height:'100px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            borderTop:'2px solid #aaa',
            position:'fixed',
            bottom:'0px',
        }}>
            FOOTER
        </Box>
    )
}

export default Footer;