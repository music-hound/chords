/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import WhiteKey from "./WhiteKey";

const KeySolo = ( { whiteActive } )=>{
    
    return (
        <Box
        sx={{
        }}>
            <WhiteKey active={whiteActive} />
        </Box>
    )
}

export default KeySolo;