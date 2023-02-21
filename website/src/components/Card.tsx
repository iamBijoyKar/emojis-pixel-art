import React from "react";
import download from './../assets/download.png';

type CardProp = {
    imgSrc:string,
    name:string
}


export default function Card(props:CardProp){
    const {imgSrc , name} = props;
    return(
        <div className="w-40 shadow-md rounded-md h-80 block">
            <img src={`/emojis/${imgSrc}.png`} alt="emoji" className="" />
            <div className="flex flex-col gap-2 rounded-bl-md rounded-br-md justify-center ">
                <p className="font-bold text-lg text-center">{name}</p>
                <a href={`/emojis/${imgSrc}.png`} download className="bg-sky py-1 px-2 w-max py-1/2 rounded-md mx-auto my-2 flex flex-row gap-2">Download <img src={download} className="w-5 hover:animate-bounce focus:motion-safe:animate-spin" /> </a>
            </div>
        </div>
    )
}