import React from 'react'
import bank from "./img/bank.png"
import busan from './img/busan.png'
import  market from './img/market.png'
import { useState } from "react";

export default function FoodCard({fobj}) {

    // const fobj =  {
    //     "구분": "광역지원센터",
    //     "시군구": "부산시",
    //     "사업장명": "부산광역푸드뱅크",
    //     "신고기준": "당연",
    //     "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    //     "연락처(대표번호)": "051-791-1377",
    //     "팩스번호": "051-714-3096",
    //     "운영주체 분류": "1. 사회복지법인",
    //     "운영주체명": "부산광역시사회복지협의회"
    //   };
    
    const fimg = fobj["구분"] === "기초푸드뱅크" ? bank : 
                 fobj["구분"] === "기초푸드마켓" ? market : busan;
    
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(!isClick);
    }

    return (
        // <div className='flex border-red-600 border-2'>
        //     <div className=' border-blue-600 border-2 m-2'><img src={busan} alt="busan" /></div>
        //     <div className='p-5 pl-0 border-blue-600 border-2 m-2'>
        //         <h1 className='font-bold text-2xl m-1 border-green-600 border-2'>{fobj["사업장명"]}</h1>

        //         <h3 className='font-bold text-lg m-1 border-green-600 border-2'>{fobj["운영주체명"]}</h3>
        //         <p className='m-1 border-green-600 border-2 text-xs'>
        //             {fobj["사업장 소재지"]}
        //         </p>
        //         <p className='mt-4 m-1 border-green-600 border-2 text-xs bg-gray-600 hover:bg-gray-100'>
        //             연락처: {fobj["연락처(대표번호)"]}
        //         </p>
        //     </div>
        // </div>

        // <div className='flex'>
        // <div className='m-2'><img src={busan} alt="busan" /></div>
        // <div className='p-5 pl-0 m-2'>
        //     <h1 className='font-bold text-2xl m-1'>{fobj["사업장명"]}</h1>

        //     <h3 className='font-bold text-lg m-1'>{fobj["운영주체명"]}</h3>
        //     <p className='m-1 text-xs'>
        //         {fobj["사업장 소재지"]}
        //     </p>
        //     <p className='mt-4 m-1 text-xs bg-gray-600 hover:bg-gray-100'>
        //         연락처: {fobj["연락처(대표번호)"]}
        //     </p>
        // </div>
        // </div>

        <div className={`w-11/12 border flex justify-center items-center `} onClick={() => handleClick()}>
            <div className='w-1/6 max-w-xl flex justify-center items-center p-2'>
                <img src={fimg} alt={bank} className='w-full inline-flex m-2'/>
            </div>
            <div className='w-5/6 p-3 mx-3'>
                <h1 className='text-2xl font-bold text-slate-700'>{fobj["사업장명"]}</h1>
                <h2 className='text-xl font-bold text-slate-500'>{fobj["운영주체명"]}</h2>
                <h2 className='text-sm font-bold text-slate-400'>{fobj["사업장 소재지"]}</h2>
                <div className='w-full h-11 text-sm bg-slate-600 text-white mt-5 p-3 truncate'>
                { isClick && `Tel: ${fobj["연락처(대표번호)"]}, Fax: ${fobj["팩스번호"]}`}
                </div>
            </div>
        </div>
    )
}
