// import './App.css'; /// 전역적으로 쓰는 CSS
import { FaHome } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import MyClock from './08/MyClock';
// import HelloCss from './02/HelloCss';
// import MyDiv1 from './03_1/MyDiv1';
// import MyListMain from './04/MyListMain';
import Lotto from './06/Lotto';
// import FoodCard from './07/FoodCard';
import FoodMain from './07/FoodMain';
// import TrafficMain from './09/TrafficMain';
// import RefVal from './10/RefVal';
import RefInput from "./10/RefInput";
import BoxOffice from "./05_2/BoxOffice";
import GalleryCard from "./11/GalleryCard";
import GalleryMain from "./11/GalleryMain";
import Festival_mine from "./12/Festival_mine";
import Festival from "./12/Festival";
import RouteMain from "./13/RouteMain";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Frcst from "./14/Frcst";

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-100'>
        <div>리액트 실습</div>
        <div className="flex justify-end items-center">
          <Link to="/frcst"><div className="mx-5 p-2 rounded-md hover:bg-blue-900 hover:text-white">예보</div></Link>
          <Link to="/festival"><div className="mx-5 p-2 rounded-md hover:bg-blue-900 hover:text-white">축제</div></Link>
          <Link to="/photo"><div className="mx-5 p-2 rounded-md hover:bg-blue-900 hover:text-white">사진</div></Link>
          <Link to="/foodmarket"><div className="mx-5 p-2 rounded-md hover:bg-blue-900 hover:text-white">푸드마켓</div></Link>
          <Link to="/box"><div className="mx-5 p-2 rounded-md hover:bg-blue-900 hover:text-white">박스오피스</div></Link>
          <Link to="/lotto"><div className="mx-5 p-2 rounded-md hover:bg-blue-900 hover:text-white">로또</div></Link>
          <Link to="/"><FaHome className='text-2xl text-black' /></Link>
        </div>
      </header>
      <main className='grow flex flex-col justify-center items-center scroll-auto'>
      <Routes>
        <Route path="/" element={<MyClock />} />
        <Route path="/lotto" element={<Lotto />} />
        <Route path="/box" element={<BoxOffice />} />
        <Route path="/foodmarket" element={<FoodMain />} />
        <Route path="/photo" element={<GalleryMain />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/frcst" element={<Frcst />} />
      </Routes>
      </main>
      <footer className='flex justify-center items-center text-white bg-slate-800 h-20'>
        © 2024 OckKyungLim. All rights reserved.
      </footer>
    </div>
    </BrowserRouter>
  );
}

// 이미지 포함 정리할 수 있는 사이트
// https://excalidraw.com 
// https://app.diagrams.net/

export default App;
