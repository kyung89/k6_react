import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import getCode from './getcode.json'
import TailSelect from '../UI/TailSelect';

export default function UltraSrtFrcst() {

  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;
  const gubun = "초단기예보";

  // console.log(dt, area, x, y);

  // fetch data state 변수로 저장
  const [tdata, setTdata] = useState([]);
  const [filteredTdata, setFilteredTdata] = useState();

  // select 박스 선택값
  const [selItemName, setSelItemName] = useState();
  const [selItem, setSelItem] = useState();

  // 단위 가져오기
  const [unit, setUnit] = useState();
  
  // 화면에 표시되는 테이블 tr 저장
  const [trTags, setTrTags] = useState([]);

  // 데이터 가져오기
  useEffect(() => {
      let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
      url = url  + `serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=1000&dataType=JSON`;
      url = url + `&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;

      getData(url);

  }, []);

  // tdata 가 저장되었을 때
  /*
  useEffect(() => {
    let tm = tdata.map(item => 
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {item["category"]}
          </th>
          <td className="px-6 py-4">
            {item.fcstDate.substring(0, 4) + "-" + item.fcstDate.substring(4, 6) + '-' + item.fcstDate.substring(6, 8)}
          </td>
          <td className="px-6 py-4">
            {item.fcstTime.substring(0,2) + ":" + item.fcstTime.substring(2,4)}
          </td>
          <td className="px-6 py-4">
            {item["fcstValue"]}
          </td>
      </tr>
    );

    setTrTags(tm);
  }, [tdata])
  */

  useEffect(() => {

    if(!selItem) return;

    setUnit((getCode.filter(item => item["예보구분"] === gubun && item["항목값"] === selItem))[0].단위);

    let tm = tdata.filter(item => item["category"] === selItem)
      .map(item => 
      <tr key={item.fcstDate + item.fcstTime} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {selItemName}
          </td>
          <td className="px-6 py-4">
            {item.fcstDate.substring(0, 4) + "-" + item.fcstDate.substring(4, 6) + '-' + item.fcstDate.substring(6, 8)}
          </td>
          <td className="px-6 py-4">
            {item.fcstTime.substring(0,2) + ":" + item.fcstTime.substring(2,4)}
          </td>
          <td className="px-6 py-4">
            {`${item["fcstValue"]} ${unit}`}
          </td>
      </tr>
    );

    setTrTags(tm);
  }, [selItem])

  // select 박스에 대한 것
  const ops = [...new Set((getCode.filter(item => item["예보구분"] === gubun)).map(item => `${item.항목명} (${item.항목값})`))];
  const itemRef = useRef();

  // select 박스 항목 선택
  const handleItem = () => {

    if(itemRef.current.value === "") {
      alert("항목을 선택하세요");
      itemRef.current.focus();
      setTrTags([]);
      return;
    }

    let selectedValue = itemRef.current.value;
    selectedValue = selectedValue.substring(selectedValue.indexOf("(") + 1, selectedValue.indexOf(")"));
    setSelItemName(itemRef.current.value.split(" (")[0]);
    setSelItem(selectedValue);
    //console.log(selectedValue);
    //setFilteredTdata(tdata.filter(item => item["category"] == selectedValue));
    
  }

  // fetch 함수
  const getData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    setTdata(data.response.body.items.item);
  }

  return (
    <div className='w-full h-full flex flex-col justify-start items-center'>

    <div className='w-11/12 justify-start grid grid-cols-1 md:grid-cols-2 p-2 gap-2'>
      <div className='text-lg font-bold p-4'>
        {`${area} ${gubun} (${(dt.substring(0, 4) + "/" + dt.substring(4, 6) + '/' + dt.substring(6, 8))})`}
      </div>
      
      <div>
      <TailSelect ops={ops} opDefault={"---항목값 선택---"} selRef={itemRef} handleSel={handleItem} />
      </div>
    </div>
      
    <table className="w-10/12 text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                  항목값
                </th>
                <th scope="col" className="px-6 py-3">
                  예측일자
                </th>
                <th scope="col" className="px-6 py-3">
                  예측시간
                </th>
                <th scope="col" className="px-6 py-3">
                  예보값
                </th>
            </tr>
        </thead>
        <tbody>
            {trTags}
        </tbody>
    </table>
    </div>
  )
}
