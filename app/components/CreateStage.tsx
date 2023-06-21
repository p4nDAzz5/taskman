import React, { FC, ReactElement } from 'react';

type StageProps = {
    stages: string[]
  }

const CreateStage: FC<StageProps> = ({stages}): ReactElement => {
    return (
        <>
        {stages.map((stageLabel, i) => (
            <div
              key={i}
              className='bg-slate-700 p-5 h-full w-52 mx-auto text-white text-center'
            >
              {stageLabel} {i+1}
            </div>
          ))}
        </>
    )
};

export default CreateStage;