import React from 'react'
import {useState, useEffect, useRef} from 'react';
import GalleryCard from './GalleryCard';

export default function Festival() {

    //부산축제전체데이터
    const [tdata, setTdata] = useState();
    const [guname, setGuname] = useState();
    const [opTags, setOpTags] = useState();
    const [cardTags, setCardTags] = useState();

    //select 값
    const selRef = useRef();
    
    //실제 FETCH
    const getData = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(data => setTdata(data.getFestivalKr.item))
        .catch(err => console.log(err));
    }

    //부산축제데이터 fetch
    useEffect(() => {
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = url + `&pageNo=1&numOfRows=40&resultType=json`;
        getData(url);
    }, []);

    //구정보 만들기
    useEffect(() => {
        if(!tdata) return;
        //console.log(tdata);
        setGuname([...new Set(tdata.map(item => item.GUGUN_NM))].sort());
    }, [tdata]);

    //구 데이터 
    useEffect(() => {
        if(!guname) return;
        //console.log(guname);
        setOpTags(guname.map(gu => <option value={gu} key={gu}>{gu}</option>));
    }, [guname]);

    const handleSelGu = () => {
        //console.log(selRef.current.value);
        if(selRef.current.value == null) setCardTags(null);
        const data = tdata.filter(item => item.GUGUN_NM == selRef.current.value);
        setCardTags(data.map(item => <GalleryCard key={item["UC_SEQ"]} imgUrl={item["MAIN_IMG_THUMB"].replace("http://", "https://")} title={item["PLACE"]} ptitle={item["TITLE"]} ktag={item["TRFC_INFO"]} />));
    }

    return (
        <div className='w-full h-full flex flex-col justify-start items-center'>
            <form className="w-3/5 mx-auto flex mt-10 justify-center items-center">
            <label htmlFor="gu" className="w-1/3 block mb-2 text-lg font-bold text-gray-900">부산 축제 정보 선택</label>
            <select id="gu" onChange={handleSelGu} ref={selRef} className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                <option defaultValue={null}>---구 선택---</option>
                {opTags}
            </select>
            </form>
            <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
                {cardTags}
            </div>
        </div>
    )
}
