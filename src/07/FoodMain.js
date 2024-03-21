import React from 'react'
import fdata from './fooddata.json'
import FoodCard from './FoodCard'
import TailButton from '../UI/TailButton';
import { useState } from 'react';

export default function FoodMain() {

    const [cards, setCards] = useState();

    let c1 = new Set(fdata.map(item => item["운영주체 분류"]));
    c1 = [...c1]; // 집합을 Array 로 바꾼다
    // console.log(c1);
    
    const handleList = (citem) => {
        console.log(citem);

        const tm = fdata.filter(item => item["운영주체 분류"] == citem)
                        .map(item => <FoodCard fobj={item} key={item["사업장명"]}/>);

        setCards(tm);
    }

    const c1Btns = c1.map((item) => <TailButton key={item} caption={item} color="blue" handleClick={() => handleList(item)} />)

    return (
        <div className='w-full h-full flex flex-col justify-start items-center'>  
            <div className='flex justify-center items-center w-full bg-blue-100 p-5'>
                {c1Btns}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2'>
                {cards}
            </div>
        </div>
    ) 
}

// place-items-center