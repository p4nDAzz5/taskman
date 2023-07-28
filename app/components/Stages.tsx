import React, { FC, ReactElement, Dispatch, SetStateAction, useState} from 'react';
import Posts from './Posts';

type Post = {
  title: string;
  body: string;
};

type StageProps = {
    stages: Post[][];
    setStages: Dispatch<SetStateAction<Post[][]>>
  }

const Stages: FC<StageProps> = ({stages, setStages}): ReactElement => {
  function increasePosts(i: number){
      let updatedStages = [...stages];
      updatedStages[i] = updatedStages[i].concat({title: "Title", body: "Body"});
      setStages(updatedStages);
  }

  function handleOnDrop(e: React.DragEvent, index: number){
    const post = e.dataTransfer.getData("post") as string;
    let Post = post.split(",$#");
    let updatedStages = [...stages];
    updatedStages[Number(Post[2])].splice(Number(Post[3]), 1);
    updatedStages[index] = updatedStages[index].concat({ title: Post[0], body: Post[1] });
    setStages(updatedStages);
    // console.log(e.target);
  }

  function handleDragOver(e: React.DragEvent){
    e.preventDefault();
  }

  return (
      <>
      {stages.map((posts, i) => (
          <div
            key={i}
            onDrop={(e) => handleOnDrop(e, i)}
            onDragOver={handleDragOver}
            className='container bg-slate-700 p-5 h-full w-52 min-w-52 mx-auto text-white text-center grid grid-flow-row content-start gap-y-8 overflow-auto resize-x'
          >
            <button onClick={() => {increasePosts(i)}} className='border-2 border-black p-2'>New Post</button>

            Stage {i+1}:

            <Posts
              posts={posts}
              stage={i}
            />

          </div>
        ))}
      </>
  )
};

export default Stages;