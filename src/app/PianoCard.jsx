import Piano, { getPianoSize } from './Piano.jsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const pianoSize = getPianoSize();

export default function PianoCard( { chord } ){

  
    return (
        <Paper
          key={chord.name}
          sx={{
            width:'100%',
            borderRadius:`${pianoSize/16}px`,
            display:'flex',
            gap:'20px',
            position:'relative',
            padding:`${pianoSize/20}px`,
            cursor:'pointer',
            boxSizing: 'border-box',
            boxShadow: '0px 0px 10px 0px #cccccc88',
            transition:'0.5s',
            // '&:hover': {boxShadow: '0px 0px 20px 10px #aaaaaa44'},
          }}>

            <Box
            sx={{
              position:'absolute',
              top:'-15px',
              left:'-15px',
              backgroundColor:'background.default',
              borderRadius:'50%',
              border:'1px solid'
            }}
            >
              <IconButton
              onClick={(e)=>{
                e.stopPropagation()
                // dispatch save to chord progression
              }}
              >
                <StarBorderIcon />
              </IconButton>
            </Box>

            <Box
            sx={{
              width:`${pianoSize/4}px`,
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>

            <Typography
            variant='span'
            sx={{
              // top:'-15px',
              position:'relative',
              fontSize:`${pianoSize/5}px`,
              height:`${pianoSize/4}px`,
              fontWeight:'800',
              opacity:'0.4',
            }}>
              {chord.name[0]}
                <Typography
                sx={{
                    position:'absolute',
                    fontSize:`${pianoSize/12}px`,
                    fontWeight:'800',
                    top:'0px',
                    right:'-20px',
                }}
                >
                    {(chord.name[1] !== '-') ? chord.name[1] : ''}
                </Typography>
            </Typography>

            <Typography
            variant='span'
            sx={{
              width:`${pianoSize/4}px`,
              color:'#ffaa2666',
              fontSize:`${pianoSize/16}px`,
              textAlign:'right',
              bottom:`${pianoSize/24}px`,
              position:'absolute'
            }}>
              {chord.name.split("-")[1]}
            </Typography>

            </Box>

            <Piano notes={chord.midiKeys} />
            
          </Paper>
    )
}