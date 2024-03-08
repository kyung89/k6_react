import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // App.js 에서 js 생략!
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* App 을 태그처럼 썼음: 사용자 정의 태그 */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);

// 앞으로 컴포넌트를 짤 거임! 컴포넌트는 일종의 함수. 컴포넌트를 사용할 때는 태그 형식으로 사용한다.