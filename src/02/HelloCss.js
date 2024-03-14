//ES7 React extension 설치 후 rfc(function), rfac(화살표 함수) 단축키로 snippet 사용

import React from 'react';
import logo from '../logo.svg';
import "./HelloCss.css";
import HelloWhite from './HelloWhite';
import HelloYellow from './HelloYellow';
import { VscAccount } from "react-icons/vsc";

export default function HelloCss() {

  const apikey = process.env.REACT_APP_MV_API;
  console.log(apikey);

  return (
    <div className='hellomain'>
      <VscAccount className="imgLogo App-logo" />
      {/* <img className="imgLogo App-logo" src={logo} alt="logo" /> */}
      <HelloWhite />
      <HelloYellow />
    </div>
  )
}
