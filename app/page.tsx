"use client"
import React from 'react'
import ".//globals.css"
import CreateStages from './components/CreateStage';
import { useState } from 'react';

import Draggable from 'react-draggable';
import { Sketch } from '@uiw/react-color';
  
export default function DraggableComponents() {
  const [stages, setStages] = useState(["Stage:"]);

  function decreaseStages(){
    if(stages.length <= 1){
      setStages(["Stage:"]);
    }
    else{
      setStages([...stages.slice(0, -1)]);
    }
  }
  function increaseStages(){
    setStages(stages.concat(["Stage:"]));
  }

  const [hex, setHex] = useState("#fff");
  let root = document.documentElement;

  function myFunction_set(color: string) {
    root.style.setProperty('--post-color', color);
    root.style.setProperty('--post-color-hover', color);
  }

  return (
    <div>
      <div className='grid grid-flow-col'>
        <button onClick={() => decreaseStages()} className='border-2 border-black p-2'>less</button>
        <button onClick={() => increaseStages()} className='border-2 border-black p-2'>more</button>
        <Sketch
            style={{ 
              // margin: "auto",
              // marginTop: 20,
              // marginBottom: 20
            }}
            color={hex}
            onChange={(color) => {
              console.log(color)
              setHex(color.hex);
              myFunction_set(color.hexa)
            }}
        />
      </div>
      
      <div className='bg-slate-500 w-fill grid grid-flow-col h-screen'>
        
        <CreateStages
          stages={stages}
        />

        <Draggable>
            <div id="post" className='p-2 border-black border-2 mx-auto bg-[color:var(--post-color)] w-40 h-40 hover:cursor-grab hover:shadow-sm active:shadow-md active:cursor-grabbing'>
              Daily Objectives:
            </div>
          </Draggable>

      </div>
    </div>
  )
}