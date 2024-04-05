import React from 'react'
import TailButton from '../UI/TailButton'
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil'
import { rcnt } from './RecoilAtom'

export default function Recoli3() {

    // 1번 방법
    //const cnt = useRecoilValue(rcnt);
    //const setCnt = useSetRecoilState(rcnt);
    
    // 2번 방법
    const [cnt, setCnt] = useRecoilState(rcnt);
    
    const handleUp = () => {
        setCnt(cnt+1);
    }

  return (
    <div className='w-1/5'>
        <TailButton caption="증가" color="blue" handleClick={handleUp} />
    </div>
  )
}
