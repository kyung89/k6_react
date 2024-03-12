import './App.css'; /// 전역적으로 쓰는 CSS
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
import MyClock from './01_1/MyClock';

// 기존의 App.js 보존 (2024-03-12)

// 컴포넌트명은 대문자로 시작! 일반 HTML 태그(소문자로 시작)와의 구분
// 컴포넌트는 일종의 내가 만드는 태그 
function App() {
  // return: 부모 태그 한 개 밖에 안된다! 안의 자식 요소는 몇 개든 상관 없음!
  // 부모태그 <div></div> 대신 <></> (fragment) 를 사용해도 된다.
  // class 대신 className 이라고 사용해야 한다. 나중에 html class 로 번역이 된다.
  return (
    <> { /* fragment tag; <></> */}
      <div className="App">
        {/* <MainHeader />
        <MainHeader />
        <Hello />
        <Hello />
        <Hello /> */}
        <MyClock />
      </div>
      {/*<div>
        402호
      </div>*/}
    </>
  );
}

// 2024-03-12 

// 화살표 함수로 작성가능
// const App = () => {
//   return ();
// }

// 리액트의 컴포넌트는 반드시 return 문을 가져야 한다
// export default App; 이 반드시 있어야 한다 (모듈형 함수 형태임!) -> import 해서 쓰기 위함!
// export default 로 된 것은 import 시 중괄호를 쓰지 않는다
// 나중에 import 중괄호 사용 경우도 다룰 예정임!

export default App;
