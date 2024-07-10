import './Container.css';

import { useEffect, useState } from 'react';
export default function Container(){
  const [text,setText] = useState('');
    const drumPads = [
        {
          keyCode: 81,
          text: "Q",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
        {
          keyCode: 87,
          text: "W",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
        {
          keyCode: 69,
          text: "E",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
        {
          keyCode: 65,
          text: "A",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
        {
          keyCode: 83,
          text: "S",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
        {
          keyCode: 68,
          text: "D",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
        {
          keyCode: 90,
          text: "Z",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
        {
          keyCode: 88,
          text: "X",
          src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
        {
          keyCode: 67,
          text: "C",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
    ];

    useEffect(()=>{
document.addEventListener('keydown', handleKeyPress);
return ()=>{
  document.addEventListener('keydown', handleKeyPress);
}
    },[]);

    const handleKeyPress =(event)=>{
      const drumpad = drumPads.find(pad=> pad.keyCode === event.keyCode);
      if(drumpad){
        playSound(drumpad);
      }
    }


    const playSound = (drumpad) => {
        const audioTag = document.getElementById(drumpad.text);
        audioTag.currentTime = 0;
        audioTag.play();
        setText(drumpad.text);
    }


    return (
        <div id='drum-machine' >
            <div id='display'>{text}</div>
<div className='drum-pads'>
                {drumPads.map((drumpad) => (
                    <div  
                        onClick={() => playSound(drumpad)} 
                        key={drumpad.keyCode} 
                        className='drum-pad' 
                        id={drumpad.src}>
                        {drumpad.text}
                        <audio src={drumpad.src} className='clip' id={drumpad.text} />
                    </div>
                ))}
                </div>
        </div>
    );
}
