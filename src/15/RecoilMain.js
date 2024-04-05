import React from 'react'
import { RecoilRoot } from 'recoil'
import Recoil1 from './Recoil1'

export default function RecoilMain() {
  return (
    <div className='w-full'>
      <RecoilRoot>
        <Recoil1 />
      </RecoilRoot>
    </div>
  )
}
