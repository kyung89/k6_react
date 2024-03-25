import React, { useState, useEffect, useRef } from 'react'
import TailButton from '../UI/TailButton'

export default function RefVal() {

    let cnt = 0; // 컴포넌트 변수(지역변수)
    const [stCnt, setStCnt] = useState(0); // state 변수
    const refCnt = useRef(0); // ref 변수

    const handleLocal= () => {
        cnt = cnt + 1; // 화면에 반영 안됨!
        console.log("cnt = ", cnt);
    }

    const handleState= () => {
        setStCnt(stCnt + 1);
    }

    useEffect(() => {
        console.log("stCnt = ", stCnt);
    }, [stCnt])

    const handleRef= () => {
        refCnt.current = refCnt.current + 1;
        console.log("refCnt = ", refCnt.current);

        // ref 변수는 form 태그의 값을 가지고 올때 사용
    }

    return (
        <div className='w-10/12 grid grid-cols-3 gap-4'>
            <div>
                컴포넌트 변수(지역변수) :  {cnt}  
            </div>
            <div>
                State 변수 : {stCnt}
            </div>
            <div>
                Ref 변수 : {refCnt.current} {/** ref 변수는 반드시 .current 를 해줘야 한다 */}
            </div>
            <div>
                <TailButton caption="컴포넌트 변수" color="blue" handleClick={handleLocal} />
            </div>
            <div>
                <TailButton caption="State 변수" color="blue" handleClick={handleState} />
            </div>
            <div>
                <TailButton caption="Ref 변수" color="blue" handleClick={handleRef} /> 
            </div>
        </div>
    )
}
