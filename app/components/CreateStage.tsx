import React, { FC, ReactElement } from 'react';

type StageProps = {
    stages: string[]
  }

const CreateStages: FC<StageProps> = ({stages}): ReactElement => {
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
        // <div className='grid grid-flow-col'>
            // <div className='bg-slate-700 p-5 h-full border text-white text-center'>
        //         Stage: 1 {stages}
        //     </div>
        //     <div className='bg-slate-700 p-5 h-full border'>
        //         <h1 className='text-white text-center mb-5'>Stage: 2</h1>
        //     </div>
        //     <div className='bg-slate-700 p-5 h-full border'>
        //         <h1 className='text-white text-center mb-5'>Stage: 3</h1>
        //     </div>
        // </div>
    )
//   const [clickedId, setClickedId] = useState(-1);

//   const handleClick = (id, label) => {
//     setClickedId(id);
//     onClick(label)
//   };

//   return (
//     <>
//       {buttons.map((buttonLabel, i) => (
//         <div
//           key={i}
//           name={buttonLabel}
//           type="button"
//           onClick={(event) => handleClick(i, buttonLabel)}
//           className={i === clickedId ? "customButton active" : "customButton"}
//         >
//           {buttonLabel}
//         </div>
//       ))}
//     </>
//   );
// export default createStages;

};

export default CreateStages;