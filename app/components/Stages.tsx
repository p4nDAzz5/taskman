import React, { FC, ReactElement, Dispatch, SetStateAction} from 'react';
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
  // function decreasePosts(){
  //   setPosts([...posts.slice(0, -1)]);
  // }

  function increasePosts(i: number){
      let updatedStages = [...stages];
      updatedStages[i] = updatedStages[i].concat({title: "Title", body: "Body"});
      setStages(updatedStages);
  }

  const handleDragOver = (e: any) => {
    const draggable = document.querySelector(".dragging");
    console.log(e.target)
  };

  return (
      <>
      {stages.map((posts, i) => (
          <div
            key={i}
            onDragOver={handleDragOver}
            className='container bg-slate-700 p-5 h-full w-52 mx-auto text-white text-center grid grid-flow-row content-start gap-y-8'
          >
            <button onClick={() => {increasePosts(i)}} className='border-2 border-black p-2'>New Post</button>

            Stage {i+1}:

            <Posts
              posts={posts}
            />

          </div>
        ))}
      </>
  )
};

export default Stages;