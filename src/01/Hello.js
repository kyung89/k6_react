import './Hello.css'; // [스타일 적용방법1]

function Hello() {
    let n = Math.floor(Math.random() * 99) + 1;

    // [JSX 문법]
    // 스타일 적용방법1: css 파일을 별도로 만들어 관리(Hello.css)
    // 스타일 적용방법2: inline 스타일 적용 -> 스타일 객체 생성해서 적용(const st1): camel 표기법으로 작성해야 한다
    // 스타일 적용방법3: style 에 직접 작성
    // 스타일 적용방법4:  

    const st1 = { // [스타일 적용방법2]
        color: "white",
        backgroundColor: "darkblue" // camel 표기법 사용
    };
    let x;

    let currentTime = new Date();

    return (
        <h1>
            <span style={st1}>
                Hello
            </span>
            <span style={{display: "inline-flex", margin: "10px"}}> {/* [스타일 적용방법3] */}
                {n < 10 && "0"}{n} {/* 한자리 수 일때 앞에 0 추가하는 코드! */}
                {n < 10 ? `0${n}` : n} {/* 삼항 연산자 활용! + 백틱 활용 */}
            </span>
            { n % 2 === 0 
                ? <span style={{color: "red"}}>짝수</span> 
                : <span style={{color: "blue"}}>홀수</span>
            } {/* 삼항 연산자 활용! */}

            { n % 2 === 0 && "🍕"}
            { n % 2 === 1 && "🥩"}
            
            {/* <p>{ x || "x는 undefined 입니다."}</p> */}
            <p>
                {currentTime.toLocaleTimeString()}
            </p>
        </h1>
    );
}

export default Hello;

