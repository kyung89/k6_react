// import './App.css'; /// 전역적으로 쓰는 CSS
import { FaHome } from "react-icons/fa";
// import MyClock from './08/MyClock';
// import HelloCss from './02/HelloCss';
// import MyDiv1 from './03_1/MyDiv1';
// import MyListMain from './04/MyListMain';
// import Lotto from './06/Lotto';
// import FoodCard from './07/FoodCard';
// import FoodMain from './07/FoodMain';
// import TrafficMain from './09/TrafficMain';
// import RefVal from './10/RefVal';
import RefInput from "./10/RefInput";
import BoxOffice from "./05_2/BoxOffice";
import GalleryCard from "./11/GalleryCard";
import GalleryMain from "./11/GalleryMain";
import Festival_mine from "./12/Festival_mine";
import Festival from "./12/Festival";

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-100'>
        <div>리액트 실습</div>
        <div><FaHome className='text-2xl text-black' /></div>
      </header>
      <main className='grow flex flex-col justify-center items-center scroll-auto'>
        <Festival />
      </main>
      <footer className='flex justify-center items-center text-white bg-slate-800 h-20'>
        © 2024 OckKyungLim. All rights reserved.
      </footer>
    </div>
  );
}

// 이미지 포함 정리할 수 있는 사이트
// https://excalidraw.com 
// https://app.diagrams.net/

export default App;
