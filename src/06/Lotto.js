import TailButton from "../UI/TailButton"

export default function Lotto() {
  const handleLottoClick = () => {
    console.log('handleLottoClick')
  }

  const handleLottoClick2 = () => {
    console.log('handleLottoClick2')
  }

  return (
    <div>
      <TailButton caption='로또번호생성' 
                  color='red'
                  handleClick={handleLottoClick}/>
      <TailButton caption='로또번호생성2' 
                  color='blue'
                  handleClick={handleLottoClick2}/>
    </div>
  )
}
