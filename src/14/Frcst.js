import React from 'react'
import FrcstNav from './FrcstNav'
import FrcstMain from './FrcstMain'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
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
  const [area, setArea] = useState();
  const [dt, setDt] = useState();

  const navigator = useNavigate();

  const ops = getxy.map(item => item['1단계']);

  const handleDate = () => {
    setDt(dRef.current.value.replaceAll('-', ''));
  }

  const handleArea = () => {

    if(sRef.current.value === "---지역 선택---" || sRef.current.value === undefined) return;

    setArea(sRef.current.value);

    const filteredData = getxy.filter(item => item['1단계'] == sRef.current.value)[0];

    setX(filteredData['격자 X']);
    setY(filteredData['격자 Y']);
  }

  useEffect(()=> {
    console.log("x = ", x);
    console.log("y = ", y);
  }, [x, y])

  /*
  // 초단기예보
  const handleUltra = () => {

    if(dt === "" || dt === undefined) {
      alert("날짜를 선택하세요");
      dRef.current.focus();
      return;
    }

    if(area === "" || area === undefined) {
      alert("지역을 선택하세요");
      sRef.current.focus();
      return;
    }

    navigator(`/ultra/${dt}/${area}/${x}/${y}`);
  }

  //단기예보
  const handleVilage = () => {

    if(dt === "" || dt === undefined) {
      alert("날짜를 선택하세요");
      dRef.current.focus();
      return;
    }

    if(area === "" || area === undefined) {
      alert("지역을 선택하세요");
      sRef.current.focus();
      return;
    }

    navigator(`/vilage/${dt}/${area}/${x}/${y}`);
  }
  */

  // 합치기
  const handleFrcst = (loc) => {

    if(dt === "" || dt === undefined) {
      alert("날짜를 선택하세요");
      dRef.current.focus();
      return;
    }

    if(area === "" || area === undefined) {
      alert("지역을 선택하세요");
      sRef.current.focus();
      return;
    }

    //navigator(`/${loc}/${dt}/${area}/${x}/${y}`);

    let gubun = '';
    if (loc == "ultra") gubun = "초단기예보";
    else gubun = "단기예보";

    navigator(`/flist?dt=${dt}&area=${area}&x=${x}&y=${y}&gubun=${gubun}`);
  }

  return (
    <div className='w-11/12 justify-start grid grid-cols-1 md:grid-cols-2 p-2 gap-2'>
      <div>
        <TailInput type="date" inputRef={dRef} ph="날짜 선택" handleChange={handleDate} />
      </div>
      <div>
        <TailSelect ops={ops} opDefault="---지역 선택---" selRef={sRef} handleSel={handleArea} />
      </div>
      <div>
        <TailButton caption="초단기예보" color="blue" handleClick={() => handleFrcst("ultra")} />
      </div>
      <div>
      <TailButton caption="단기예보" color="blue" handleClick={() => handleFrcst("vilage")} />
      </div>
    </div>
  )
}
