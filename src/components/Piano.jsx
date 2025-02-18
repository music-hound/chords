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
            whiteActive={notes.includes(60)} // C3
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
            whiteActive={notes.includes(72)} // C4
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
            whiteActive={notes.includes(83)}
            />

            <KeyPair
            whiteActive={notes.includes(84)} // C5
            blackActive={notes.includes(85)}
            />
            <KeyPair
            whiteActive={notes.includes(86)}
            blackActive={notes.includes(87)}
            />
            <KeySolo
            whiteActive={notes.includes(88)}
            />
            <KeyPair
            whiteActive={notes.includes(89)}
            blackActive={notes.includes(90)}
            />
            <KeyPair
            whiteActive={notes.includes(91)}
            blackActive={notes.includes(92)}
            />
            <KeyPair
            whiteActive={notes.includes(93)}
            blackActive={notes.includes(94)}
            />
            <KeySolo
            whiteActive={notes.includes(95)}
            />
        </Box>
    )
}

export default Piano;