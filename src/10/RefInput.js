import React from 'react'
import TailInput from '../UI/TailInput'
import TailButton from '../UI/TailButton'
import { useState, useEffect, useRef } from 'react'

export default function RefInput() {

    const inputRef = useRef(); // input 의 ref 속성으로 연결된다
    const [bts, setBts] = useState([]);
    const [tags, setTags] = useState([]);

    const handleAdd = () => {
        if(inputRef.current.value === "") {
            alert("값을 입력하세요");
            inputRef.current.focus();
        }
        console.log(inputRef.current.value);

        setBts([...bts, inputRef.current.value]);
    }

    const handleRemove = () => {
        setBts([]);
    }

    useEffect(() => {
        inputRef.current.value = "";
        inputRef.current.focus();

        let tm = bts.map((item, idx) => 
            <TailButton caption={item} color="red" key={`bt${idx}`}/>
        );
        setTags(tm);
    }, [bts]);
    
    return (
        <div className='w-full h-full'>
            <div className='flex justify-center items-center'>
                <div>
                    <TailInput type="date" ph="값 입력" inputRef={inputRef} />
                </div>
                <div className='m-5'>
                    <TailButton caption="등록" color="blue" handleClick={handleAdd} />
                    <TailButton caption="취소" color="blue" handleClick={handleRemove} />
                </div>
            </div>
            <div className='bg-red-50 h-full p-5'>
                {tags}
            </div>
        </div>
    )
}
