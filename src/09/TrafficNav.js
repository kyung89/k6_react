import React from 'react'
import TailButton from '../UI/TailButton'

export default function TrafficNav({title, category, sel, setSel}) {
  
  const bts = category.map(item => <TailButton caption={item} key={item} color={item===sel? "red": "blue"} handleClick={() => handleBtClick(item)} />);

  const handleBtClick = (item) => {
    setSel(item);
  };

  return (
    <div className='w-11/12 flex justify-between items-center'>
      <h1 className="text-xl font-bold">
        교통사고 {title}
      </h1>
      <div>
        {bts}
      </div>
    </div>
  )
}
