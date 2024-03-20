import { GoHeartFill } from "react-icons/go";
import { useState } from "react";

export default function MyList({title, imgUrl, content}) {
  //지역변수
  let cnt = 0 ;

  //state 변수
  const [stCnt ,  setStCnt] = useState(0);
  
  const handleLike = (t) => {
    console.log('handleLike'+ t);
    cnt = cnt + 1 ;
    console.log(`cnt = ${cnt}`)
    setStCnt(stCnt + 1) ;
  }

  return (
    <div className="w-full flex border 
                    rounded hover:bg-gray-100">
      <div className="w-1/4 max-w-40">
        <img src={imgUrl} alt={title} />
      </div>      
      <div className="w-3/4 px-5 py-3">
        <h1 className="text-2xl font-bold
                       text-gray-700">
                        {title}
        </h1>
        <p className="w-full text-gray-600">
          {content}
        </p>
        <p className="w-full flex justify-end items-center
                      mt-5 font-bold">
          <span className="text-xl" 
                onClick={() => {handleLike(title)}}>
            <GoHeartFill className="text-red-600
                                    hover:text-black"/>
          </span>
          <span className="mx-2">좋아요</span>
          <span>{stCnt}</span>
        </p>
      </div>
    </div>
  )
}
