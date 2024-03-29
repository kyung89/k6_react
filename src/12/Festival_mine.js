import React, { useEffect, useRef, useState, useTransition } from 'react'
import GalleryCard from './GalleryCard';

export default function Festival_mine() {

  const [basicData, setBasicData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [options, setOptions] = useState(null);
  const optionRef = useRef();

  const getInitialData = () => {
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=40&resultType=json`;
  
    fetch(url)
        .then(res => res.json())
        .then(data => setBasicData(data.getFestivalKr.item))
        .catch(err => console.log(err));
  }

  useEffect(() => {
    if(!basicData) return;
    //console.log(basicData);
    setOptions([...new Set(basicData.map(item => item.GUGUN_NM))]);
  }, [basicData]);

  useEffect(() => {
    if(!options) return;
    //console.log(options);
  }, [options]);

  useEffect(() => {
    getInitialData();
  }, []);

  const handleChange = (e) => {
    //console.log(e.target.value);

    if(e.target.value == null) setFilteredData([]);

    const data = basicData.filter(item => item.GUGUN_NM == e.target.value);
    setFilteredData(data.map(item => <GalleryCard key={item["UC_SEQ"]} imgUrl={item["MAIN_IMG_NORMAL"].replace("http://", "https://")} title={item["TITLE"]} ptitle={item["SUBTITLE"]} ktag={item["USAGE_DAY"]} />));
  }

  return (
    <div className='w-11/12 flex flex-col mt-5 h-full justify-start items-center'>
      <h1 className='text-xl font-bold'>부산 축제 정보</h1>
      <select onChange={handleChange} ref={optionRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue={null}>---구 선택---</option>
        {options && options.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
                {filteredData}
            </div>
    </div>
  )
}
