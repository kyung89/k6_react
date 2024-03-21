import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";
import "./MyClock.css" ;

function MyClock() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <MyClockImage />
      <MyClockTime />
    </div>
  )
}

export default MyClock ;
