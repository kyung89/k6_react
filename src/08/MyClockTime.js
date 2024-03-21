import { useState, useEffect } from 'react';

function MyClockTime() {

  const [currentTime, setCurrentTime] = useState();
  const [tm, setTm] = useState(0);

  // timer: setInterval 함수를 쓸 것이다.

  // useEffect: callback 함수가 들어가야 한다
  // 인수가 없는 경우 바뀔 때 마다 찍는다
  // []가 있는 경우 처음 한번만 찍는다
  useEffect(() => {
    const t = setInterval(() => {
      setCurrentTime(new Date);
    });
    // setTm(tm + 1);
    console.log("[] =>", currentTime);

    return () => {clearInterval(t)};
  }, []);
  // 맨 처음에 한번 찍힌다: 1번

  useEffect(() => {
    // console.log("[] =>", currentTime, tm);
  }, [tm]);
  // 초기화 경우에도 tm 이 변경되었다고 인식한다.
  // 초기화, 값 변경 경우 출력: 2번

  useEffect(() => {
    // console.log("[] =>", currentTime);
  }, [currentTime]);
  // 무조건 실행된다: 렌더링이 일어날 때마다 실행!

  return (
    <h1 className="font-bold text-2xl">
      { currentTime && `현재 시각 : ${currentTime.toLocaleTimeString()}` }
    </h1>
  )
}

export default MyClockTime ;
