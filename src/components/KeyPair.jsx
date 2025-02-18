/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";

const KeyPair = ( { whiteActive, blackActive } )=>{
    
    return (
        <Box
        sx={{
        }}>
            <WhiteKey active={whiteActive} />
            <BlackKey active={blackActive} />
        </Box>
    )
}

export default KeyPair;