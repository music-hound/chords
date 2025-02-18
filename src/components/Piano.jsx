/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import KeyPair from "./KeyPair";
import KeySolo from "./KeySolo";

const Piano = ({notes})=>{
    return (
        <Box
        className={'piano'}
        sx={{
            display: 'flex',
            gap:`1px`,
            position: 'relative',
            border:`1px solid #aaa`,
            borderRadius: `10px`,
            overflowX:'scroll',
            backgroundColor:'#ccc',
            transition:'1s',
          }
        }>
            <KeyPair
            whiteActive={notes.includes(60)}
            blackActive={notes.includes(61)}
            />
            <KeyPair
            whiteActive={notes.includes(62)}
            blackActive={notes.includes(63)}
            />
            <KeySolo
            whiteActive={notes.includes(64)}
            />
            <KeyPair
            whiteActive={notes.includes(65)}
            blackActive={notes.includes(66)}
            />
            <KeyPair
            whiteActive={notes.includes(67)}
            blackActive={notes.includes(68)}
            />
            <KeyPair
            whiteActive={notes.includes(69)}
            blackActive={notes.includes(70)}
            />
            <KeySolo
            whiteActive={notes.includes(71)}
            />
            <KeyPair
            whiteActive={notes.includes(72)}
            blackActive={notes.includes(73)}
            />
            <KeyPair
            whiteActive={notes.includes(74)}
            blackActive={notes.includes(75)}
            />
            <KeySolo
            whiteActive={notes.includes(76)}
            />
            <KeyPair
            whiteActive={notes.includes(77)}
            blackActive={notes.includes(78)}
            />
            <KeyPair
            whiteActive={notes.includes(79)}
            blackActive={notes.includes(80)}
            />
            <KeyPair
            whiteActive={notes.includes(81)}
            blackActive={notes.includes(82)}
            />
            <KeySolo
            whiteActive={notes.includes(63)}
            />

            {/* <WhiteKey active={notes.includes(60)}/>
            <WhiteKey active={notes.includes(62)}/>
            <WhiteKey active={notes.includes(64)}/>
            <WhiteKey active={notes.includes(65)}/>
            <WhiteKey active={notes.includes(67)}/>
            <WhiteKey active={notes.includes(69)}/>
            <WhiteKey active={notes.includes(71)}/>

            <WhiteKey active={notes.includes(72)}/>
            <WhiteKey active={notes.includes(74)}/>
            <WhiteKey active={notes.includes(76)}/>
            <WhiteKey active={notes.includes(77)}/>
            <WhiteKey active={notes.includes(79)}/>
            <WhiteKey active={notes.includes(81)}/>
            <WhiteKey active={notes.includes(83)}/>

            <BlackKey sx={{left:blackShift}} active={notes.includes(61) } />
            <BlackKey sx={{left:blackShift*2}} active={notes.includes(63) } />
            <BlackKey sx={{left:blackShift*4}} active={notes.includes(66) } />
            <BlackKey sx={{left:blackShift*5}} active={notes.includes(68) } />
            <BlackKey sx={{left:blackShift*6}} active={notes.includes(70) } />

            <BlackKey sx={{left:blackShift*8}} active={notes.includes(73) } />
            <BlackKey sx={{left:blackShift*9}} active={notes.includes(75) } />
            <BlackKey sx={{left:blackShift*11}} active={notes.includes(78) } />
            <BlackKey sx={{left:blackShift*12}} active={notes.includes(80) } />
            <BlackKey sx={{left:blackShift*13}} active={notes.includes(82) } /> */}
        </Box>
    )
}

export default Piano;