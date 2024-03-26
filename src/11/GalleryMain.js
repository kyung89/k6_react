import React from 'react'
// import gdata from './GalleryData.json'
import GalleryCard from './GalleryCard'
import TailInput from '../UI/TailInput'
import TailButton from '../UI/TailButton'
import { useRef, useState, useEffect } from 'react'

export default function GalleryMain() {

    // const imgUrl = gdata["galWebImageUrl"];
    // const title = gdata["galTitle"];
    // const ptitle = gdata["galPhotographyLocation"]
    // let ktag = gdata["galSearchKeyword"];

    const keyword = useRef();
    const [tdata, setTdata] = useState();
    const [tags, setTags] = useState();

    useEffect(() => {
        if(!tdata) return;

        setTags(tdata.map(item => <GalleryCard key={item["galContentId"]} imgUrl={item["galWebImageUrl"].replace("http://", "https://")} title={item["galTitle"]} ptitle={item["galPhotographyLocation"]} ktag={item["galSearchKeyword"]} />));
    }, [tdata]);

    const getData = (w) => {
        // console.log(w);
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = url + `&keyword=${w}&_type=json`;

        fetch(url)
        .then(res => res.json())
        .then(data => setTdata(data.response.body.items.item))
        .catch(err => console.log(err));

    }

    const handleKeyword = () => {
    };

    const handleFetch = () => {

        if(keyword.current.value === '') {
            alert("키워드를 입력하세요");
            keyword.current.focus();
            return;
        }

        // console.log(keyword.current.value);

        // 인코딩을 시켜줘야 한다
        let w = encodeURI(keyword.current.value);
        // console.log(w);

        handleClear();
        getData(w);

        /*
        https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json
        */
        // 1. 공공데이터포털 로그인
        // 2. 필요한 데이터 활용신청
        // 3. 마이페이지 들어가기
        // 4. 사용할 데이터로 들어가기
        // 5. 상세기능정보에서 사용할 데이터 미리보기
        // 6. 인증키를 인코딩 인증키로 변경해서 미리보기
        // 7. JSON 데이터 확인 가능
    };

    const handleClear = () => {
        setTdata("");
        setTags("");
        keyword.current.focus();
    };

    return (
        <div className='w-11/12 flex flex-col mt-5 h-full justify-start items-center'>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-200 p-2'>
                <div className='p-2'>
                    <TailInput type="text" inputRef={keyword} ph="키워드를 입력하세요" handleChange={handleKeyword} />
                </div>
                <div className='px-4'>
                    <TailButton caption="조회" color="blue" handleClick={handleFetch}/>
                </div>
                <div className='px-4'>
                    <TailButton caption="취소" color="blue" handleClick={handleClear}/>
                </div>
            </div>
            <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
                {tags}
            </div>
        </div>
        
    )
}
