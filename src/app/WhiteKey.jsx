import { useEffect, useState } from "react"
import { getPianoSize } from "./Piano";

const pianoSize = getPianoSize();

export default function WhiteKey( { active } ){
    const [ activeBackground, setActiveBackground ] = useState('linear-gradient(180deg, #ffffff 0%, #f2f2f2 100%)')
    
    const width = pianoSize/14

    useEffect(()=>{
        if (active) {setActiveBackground('linear-gradient(180deg, #ffaa26 0%, #fb8c00 100%)')}
    },[active])

    return (
        <div
        style={{
            width: `${width}px`,
            height: '100%',
            background: activeBackground,
            borderRadius: `0px 0px ${width/6}px ${width/6}px`,
            position: 'relative',
            zIndex: '1',
          }}
        />
    )
}