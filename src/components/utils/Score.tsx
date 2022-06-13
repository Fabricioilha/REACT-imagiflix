import { useEffect, useState } from "react"

type typeScore = {
    score: number | undefined,
    size?: number 
}

const Score = ({score, size=50}:typeScore)=>{
    const [ cor, setCor ] = useState<string>();
    
    const getBorderColor = () =>{
        if(score && score > 7){
            setCor("green");
        }else if(score && score <= 7 && score > 5){
            setCor("yellow");
        }else{
            setCor("red");
        }
    }
    useEffect(()=>{
        getBorderColor()
        // eslint-disable-next-line
    },[score])
    
    return(
        <span className={`border-4 rounded-full p-2 inline bg-black opacity-75 text-center`}
            style={{borderColor:`${cor}`, width:`${size}px`, height:`${size}px`}}>
            {score}
        </span>
    )
}

export default Score