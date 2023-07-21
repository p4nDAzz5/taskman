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
  // const handleDragStart = (e: any, title: string, body: string) => {
    // e.target.classList.add('dragging');
  // };

  function handleOnDrag(e: React.DragEvent, title: string, body: string, stage: string, index: string){
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.setData("post", title + ",$#" + body + ",$#" + stage + ",$#" + index);
  }

  const handleDragEnd = (e: any) => {
    e.target.classList.remove('dragging');
  };

  return (
      <>
      {posts.map((postLabel, i) => (
          <div 
            key={i}
            draggable="true"
            onDragStart={(e) => handleOnDrag(e, postLabel.title, postLabel.body, stage.toString(), i.toString())}
            onDragEnd={handleDragEnd}
            className='draggable p-2 border-black border-2 mx-auto bg-[color:var(--post-color)] text-black w-40 h-40 hover:cursor-grab hover:shadow-sm active:shadow-md active:cursor-grabbing'
          >
              {postLabel.title}
              {postLabel.body}
          </div>
        ))}
      </>
  )
};

export default Posts;