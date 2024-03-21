import TailButton from "../UI/TailButton" ;
import TailBall from "../UI/TailBall";
import { useState } from "react";

export default function Lotto() {
  const [ballTags, setBallTags] = useState();

  const handleLottoClick = () => {
    let nums = [] ;

    while(nums.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1 ;
      if (!nums.includes(n)) nums.push(n) ;
    }

    console.log(nums)
    nums.splice(6,0, '+') ;

    const tm = nums.map((item, idx) => 
        idx === 6 ? <span key={`sp${item}`}
                      className="text-2xl font-bold mx-2" > 
                      {item} 
                    </span>
                  : <TailBall n={item} key={`ball${item}`}/>   
     )
      
    setBallTags(tm) ;
  }
 
  return (
    <div className="flex flex-col 
                    justify-center items-center
                    w-full h-full">
      <div className="flex justify-center items-center
                      my-10">
        {ballTags}
      </div>
      <div>
        <TailButton caption='로또번호생성' 
                    color='blue'
                    handleClick={handleLottoClick}/> 
      </div>
    </div>
  )
}