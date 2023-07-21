import React, { FC, ReactElement } from 'react';

type Post = {
  title: string;
  body: string;
};

type PostProps = {
  posts: Post[]
  }

const Posts: FC<PostProps> = ({posts}): ReactElement => {
  const handleDragStart = (e: any) => {
    e.target.classList.add('dragging');
  };
  const handleDragEnd = (e: any) => {
    e.target.classList.remove('dragging');
  };

  return (
      <>
      {posts.map((postLabel, i) => (
          <div 
            key={i}
            draggable="true"
            onDragStart={handleDragStart}
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