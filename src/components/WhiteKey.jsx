/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import "../styles/styles.css"

export default function WhiteKey( { active } ){

    const [ activeBackground, setActiveBackground ] = useState('linear-gradient(180deg, #ffffff 0%, #f2f2f2 100%)')

    useEffect(()=>{
        if (active) {setActiveBackground('linear-gradient(180deg, #ffaa26 0%, #fb8c00 100%)')}
    },[active])

    return (
        <div
        className="white_key"
        style={{
            width: `20px`,
            height: '100%',
            background: activeBackground,
            borderRadius: `0px 0px 3px 3px`,
            position: 'relative',
            zIndex: '1',
          }}
        />
    )
}