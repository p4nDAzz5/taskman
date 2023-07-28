import { title } from 'process';
import React, { FC, ReactElement } from 'react';

type Post = {
  title: string;
  body: string;
};

type PostProps = {
  posts: Post[];
  stage: number;
  }

const Posts: FC<PostProps> = ({posts, stage}): ReactElement => {
  function handleOnDrag(e: React.DragEvent, title: string, body: string, stage: string, index: string){
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.setData("post", title + ",$#" + body + ",$#" + stage + ",$#" + index);
  }

  const handleDragEnd = (e: any) => {
    e.target.classList.remove('dragging');
  };

  function editPost(e: any){
    
  }
  

  return (
      <>
      {posts.map((postLabel, i) => (
          <div 
            key={i}
            draggable="true"
            onDragStart={(e) => handleOnDrag(e, postLabel.title, postLabel.body, stage.toString(), i.toString())}
            onDragEnd={handleDragEnd}
            className='draggable p-2 border-black border-2 mx-auto bg-[color:var(--post-color)] text-black w-full h-fit'
          >
            <div className='grid grid-flow-col'>
              <button onClick={() => {editPost(i)}} className='content-start'>📝</button>
              <button onClick={() => {editPost(i)}} className='content-start'>📝</button>
              <button onClick={() => {editPost(i)}} className='content-start'>📝</button>
            </div>
            <hr className='h-0.5 mx-auto my-2 border-0 bg-gray-700'></hr>
            <h1 className='text-xl font-bold'>
              {postLabel.title}
            </h1>
            <p className='text-left'>
              {postLabel.body}
            </p>
          </div>
        ))}
      </>
  )
};

export default Posts;