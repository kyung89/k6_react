import React, { useEffect } from 'react'
import Recoil2 from './Recoil2';
import { useRecoilValue } from 'recoil'
import { rcnt } from './RecoilAtom'

export default function Recoil1() {

  const cnt = useRecoilValue(rcnt);

  return (
    <div className='w-full h-full flex flex-col text-2xl font-bold justify-center items-center'>
      Recoil1: {cnt}
      <Recoil2 />
    </div>
  )
}
