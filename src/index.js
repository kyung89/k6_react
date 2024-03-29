import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // App.js 에서 js 생략!
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
 {/* App 을 태그처럼 썼음: 사용자 정의 태그 */}
root.render(
  //<React.StrictMode> {/* 내부적으로 한번 더 엄격하게 검사: StrictMode 주석처리해야 console.log 두번 안 나옴 */}
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);

// 앞으로 컴포넌트를 짤 거임! 컴포넌트는 일종의 함수. 컴포넌트를 사용할 때는 태그 형식으로 사용한다.

// 2024-03-12
// 함수형 컴포넌트와 클래스형 컴포넌트가 있는데, 수업에서는 함수형 컴포넌트만 쓸 거임!
