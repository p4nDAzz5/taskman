"use client"
import React from 'react'
import ".//globals.css"
import Stages from './components/Stages';
import { useState } from 'react';
// import { useDrag, useDrop } from 'react-dnd';

import { Sketch } from '@uiw/react-color';

type Post = {
  title: string;
  body: string;
};

export default function DraggableComponents() {
  const [stages, setStages] = useState<Array<Array<Post>>>([[]]);
  // const draggables = document.querySelectorAll("#post");
  // const containers = document.querySelectorAll("#stage");

  // draggables.forEach(draggable => {
  //   draggable.addEventListener('dragstart', () => {
  //     console.log('Drag Start')
  //   })
  // })


  console.log(stages);

  function decreaseStages(){
    if(stages.length <= 1){
      setStages([[]]);
    }
    else{
      setStages([...stages.slice(0, -1)]);
    }
  }

  function increaseStages(){
    setStages(stages.concat([[]]));
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
        <button onClick={() => {decreaseStages()}} className='border-2 border-black p-2'>less</button>
        <button onClick={() => {increaseStages()}} className='border-2 border-black p-2'>more</button>
        <Sketch
            style={{ 
              // margin: "auto",
              // marginTop: 20,
              // marginBottom: 20
            }}
            color={hex}
            onChange={(color) => {
              // console.log(color);
              setHex(color.hex);
              myFunction_set(color.hexa);
            }}
        />
      </div>
      
      <div id="bg" className='bg-slate-500 w-fill grid grid-flow-col min-h-screen max-h-fit'>
        
        <Stages
          stages={stages}
          setStages={setStages}
        /> 

      </div>
    </div>
  )
}