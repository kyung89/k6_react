import React from 'react'
import MyDiv3 from './MyDiv3';

export default function MyDiv2(probs) {
  // console.log(props);
  return (
    <div className="w-4/5 h-3/5 flex flex-col justify-center items-center bg-lime-700 text-lime-50">
            <p className='w-4/5 flex justify-start font-bold text-2xl m-5'>{`${probs.d1} > ${probs.d2}`}</p>
            <MyDiv3 d1={probs.d1} d2={probs.d2} d3={probs.d3}/>
        </div>
  )
}
