import React from 'react'

export default function MyDiv3({d1, d2, d3}) {
  return (
    <div className="w-4/5 h-3/5 flex justify-center items-start bg-lime-500 text-lime-50">
            <p className='w-4/5 flex justify-start font-bold text-2xl m-5'>{`${d1} > ${d2} > ${d3}`}</p>
            
        </div>
  )
}
