import logo from './logo.svg';
import './App.css';

// 컴포넌트명은 대문자로 시작! 일반 HTML 태그(소문자로 시작)와의 구분
// 컴포넌트는 일종의 내가 만드는 태그 
function App() {
  // return: 부모 태그 한 개 밖에 안된다! 안의 자식 요소는 몇 개든 상관 없음!
  // 부모태그 <div></div> 대신 <></> (fragment) 를 사용해도 된다.
  // class 대신 className 이라고 사용해야 한다. 나중에 html class 로 번역이 된다.
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            K-digital 6기 옥경림
          </p>
        </header>
      </div>
      <div>
        402호
      </div>
    </>
  );
}

export default App;
