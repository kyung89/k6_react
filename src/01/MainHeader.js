import logo from '../logo.svg';

function MainHeader() {

    // html 과 js 를 같이 쓸 수 있는 jsx(모두 camel 표기법 사용) 문법!
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default MainHeader;