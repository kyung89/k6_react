import React from 'react'
import FrcstNav from './FrcstNav'
import FrcstMain from './FrcstMain'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TailSelect from '../UI/TailSelect'
import TailInput from '../UI/TailInput'
import TailButton from '../UI/TailButton'
import { useState, useEffect, useRef } from 'react'
import getxy from './getxy.json'

export default function Frcst() {

  const dRef = useRef();
  const sRef = useRef();
  const [x, setX] = useState();
  const [y, setY] = useState();

  const ops = getxy.map(item => item['1단계']);

  const handleDate = () => {
    console.log(dRef.current.value);
  }

  const handleArea = () => {
    //console.log(sRef.current.value);

    const filteredData = getxy.filter(item => item['1단계'] == sRef.current.value)[0];

    setX(filteredData['격자 X']);
    setY(filteredData['격자 Y']);
  }

  useEffect(()=> {
    console.log("x = ", x);
    console.log("y = ", y);
  }, [x, y])

  return (
    <div className='w-11/12 justify-start grid grid-cols-1 md:grid-cols-2 p-2 gap-2'>
      <div>
        <TailInput type="date" inputRef={dRef} ph="날짜 선택" handleChange={handleDate} />
      </div>
      <div>
        <TailSelect ops={ops} opDefault="---지역 선택---" selRef={sRef} handleSel={handleArea} />
      </div>
      <div>
        <TailButton caption="초단기예보" color="blue" handleClick={()=>{}} />
      </div>
      <div>
      <TailButton caption="단기예보" color="blue" handleClick={()=>{}} />
      </div>
    </div>
  )
}
