"use client"
import React from 'react'
import ".//globals.css"
import CreateStage from './components/CreateStage';
import CreatePost from './components/CreatePost';
import { useState } from 'react';

import { Sketch } from '@uiw/react-color';
  
export default function DraggableComponents() {
  const [stages, setStages] = useState(["Stage:"]);
  const [posts, setPosts] = useState<string[]>([]);

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

  function decreasePosts(){
    setPosts([...posts.slice(0, -1)]);
  }
  function increasePosts(){
    setPosts(posts.concat(["Post:"]));
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
        <button onClick={() => {decreaseStages(), decreasePosts()}} className='border-2 border-black p-2'>less</button>
        <button onClick={() => {increaseStages(), increasePosts()}} className='border-2 border-black p-2'>more</button>
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
      
      <div id="bg" className='bg-slate-500 w-fill grid grid-flow-col h-screen'>
        
        <CreateStage
          stages={stages}
        />

        <CreatePost
          posts={posts}
        />

        

      </div>
    </div>
  )
}