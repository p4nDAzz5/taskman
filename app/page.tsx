"use client"
import Draggable from 'react-draggable';
import React from 'react'
import ".//globals.css"
import { Sketch } from '@uiw/react-color';
import { useState } from 'react';
  
export default function DraggableComponents() {
  const [hex, setHex] = useState("#fff");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  let root = document.documentElement;
  // console.log(window.innerWidth);

  function myFunction_set(color: string) {
    root.style.setProperty('--post-color', color);
    root.style.setProperty('--post-color-hover', color);
  }

  const trackPos = (data: { x: number; y: number }) => {
    setPosition({ x: data.x, y: data.y });
    var target = document.getElementById("target");
    var post = document.getElementById("post");
  
    if((post.offsetLeft + data.x) >= target.offsetLeft && (post.offsetLeft + data.x) <= (target.offsetLeft + target.offsetWidth)){
      root.style.setProperty('--col-color', "#96967E");
    }
    else{
      root.style.setProperty('--col-color', "#323E57");
    }
    // console.log(target?.offsetLeft);
    // console.log(target?.offsetWidth);
    // console.log(post?.offsetLeft + data.x);
    // console.log(post?.offsetWidth);
  };

  return (
    <div>
      <Sketch
          style={{ 
            margin: "auto",
            marginTop: 20,
            marginBottom: 20
          }}
          color={hex}
          onChange={(color) => {
            console.log(color)
            setHex(color.hex);
            myFunction_set(color.hexa)
          }}
      />
      <div className='bg-slate-500 w-fill grid grid-flow-col h-screen'>
        <div className='bg-slate-700 mx-auto p-5 w-52'>
          <h1 className='text-white text-center mb-5'>Stage: Start</h1>
          <Draggable onDrag={(e, data) => trackPos(data)}>
            <div id="post" className='p-2 border-black border-2 mx-auto bg-[color:var(--post-color)] w-40 h-40 hover:cursor-grab hover:shadow-sm active:shadow-md active:cursor-grabbing'>
              Daily Objectives:
              x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
            </div>
          </Draggable>
        </div>
        <div id='target' className='bg-[color:var(--col-color)] mx-auto p-5 w-52'>
          <h1 className='text-white text-center mb-5'>Stage: Working</h1>
        </div>
        <div className='bg-slate-700 mx-auto p-5 w-52'>
          <h1 className='text-white text-center mb-5'>Stage: Finish</h1>
        </div>

      </div>
    </div>
  )
}