import React, { FC, ReactElement } from 'react';
import Draggable from 'react-draggable';

type PostProps = {
  posts: string[]
  }

const CreatePost: FC<PostProps> = ({posts}): ReactElement => {
    return (
        <>
        {posts.map((postLabel, i) => (
            <Draggable>
              <div id="post" className='p-2 border-black border-2 mx-auto bg-[color:var(--post-color)] w-40 h-40 hover:cursor-grab hover:shadow-sm active:shadow-md active:cursor-grabbing'>
                {postLabel} {i+1}
              </div>
            </Draggable>
          ))}
        </>
    )
};

export default CreatePost;