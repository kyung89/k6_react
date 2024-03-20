import BoxOfficeData from "./BoxOffice.json";

import { useState } from "react";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";
export default function BoxOfficeTb() {
  //영화 목록 json 가져오기
  const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList ;
  //state 변수
  const [selMv, setSelMv] = useState() ;

  return (
    <div className="w-full flex flex-col 
                    justify-center items-center">
      <table className="w-4/5 border">
        <BoxOfficeThead />  
        <BoxOfficeTbody boxList={boxList} setSelMv={setSelMv} /> 
      </table>
      <BoxOfficeInfo selMv={selMv} />
    </div>
  )
}
