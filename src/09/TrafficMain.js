import React from 'react'
import { useState, useEffect } from 'react'
import TrafficNav from './TrafficNav';

export default function TrafficMain() {

    const [tdata, setTdata] = useState();
    const [c1, setC1] = useState(); // 대분류: 중복제거
    const [c2, setC2] = useState(); /// 중분류
    const [selC1, setSelC1] = useState(); // 선택된 대분류
    const [selC2, setSelC2] = useState(); // 선택된 중분류

    const [detail, setDetail] = useState(); // 상세정보
    const [info, setInfo] = useState(); // 상세정보

    const getDataFetch = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
        url = `${url}page=1&perPage=20&`;
        url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;

        getDataFetch(url);
    }, []);

    // useEffect(() => {
    //     if(!tdata) return; // undefined
    //     console.log(tdata)
    //     let filteredData = new Set(tdata.map(item => item["사고유형_대분류"]));
    //     filteredData = [...filteredData];
    //     setC1(filteredData);
    // }, [tdata])

    // useEffect(() => {
    //     console.log(c1);
    // }, [c1])

    useEffect(() => {

        if(!tdata) return;

        let tm = new Set(tdata.map(item => item["사고유형_대분류"]));
        tm = [...tm];
        setC1(tm);

    }, [tdata])

    useEffect(() => {

        if(!tdata) return;

        setSelC2(null); //중분류 선택 초기화
        setDetail(''); // detaul 초기화
        setInfo(''); // info 초기화

        let tm = new Set(tdata.filter(item => item["사고유형_대분류"] === selC1).map(item => item["사고유형_중분류"]));
        tm = [...tm];
        setC2(tm);

    }, [selC1])

    useEffect(() => {

        if(!tdata) return;

        const detail = tdata.filter(item => item["사고유형_대분류"] === selC1 && item["사고유형_중분류"] === selC2);
        setDetail(detail[0]);

    }, [selC2])

    useEffect(() => {

        if(!detail) return;

        const keyArray = ['사고건수','사망자수','중상자수','경상자수','부상신고자수'];
        
        let tm = keyArray.map((k) => 
            <div className='w-full mt-10 flex justify-center items-center' key={k}>
                <div className='w-1/2 h-10 font-bold flex justify-center items-center bg-slate-200'>{k}</div>
                <div className='w-1/2 h-10 font-bold flex justify-center items-center bg-slate-100'>{parseInt(detail[k]).toLocaleString()}</div>
            </div>);
        
        setInfo(tm);

    }, [detail]);

    return (
        <div className='w-full h-full mt-5 flex flex-col justify-start items-center'>
            {c1 && <TrafficNav title="대분류" category={c1} sel={selC1} setSel={setSelC1} /> }
            {c2 && <TrafficNav title="중분류" category={c2} sel={selC2} setSel={setSelC2} /> }
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
                {info}
            </div>
        </div>
    ) 
}
