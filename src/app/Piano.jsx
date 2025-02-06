import WhiteKey from './WhiteKey';
import BlackKey from './BlackKey';
import Box from '@mui/material/Box';

export function getPianoSize(){
    const viewportWidth = window.innerWidth;
    if (viewportWidth > 1000){
        return 600
    } else if (viewportWidth >= 650 && viewportWidth <= 1000){
        return 400
    } else if (viewportWidth < 650){
        return 230
    }
}

export default function Piano( { notes } ){

    const pianoSize = getPianoSize();
    const blackShift = pianoSize/14;

    return (
        <Box
        sx={{
            display: 'flex',
            gap:`${pianoSize/600}px`,
            position: 'relative',
            width: '70%',
            height: 'inherit',
            border:`${pianoSize/800}px solid #aaa`,
            borderRadius: `${pianoSize/40}px`,
            overflowX:'scroll',
            background: '#aaa',
          }
        }>
            <WhiteKey active={notes.includes(60)}/>
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
            <BlackKey sx={{left:blackShift*13}} active={notes.includes(82) } />
        </Box>
    )
}