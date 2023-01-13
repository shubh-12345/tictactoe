import { useState } from 'react';
import './App.css';
import { best_move, goal } from './logic';

function App() {
  const [board, setBoard] = useState([['*', '*', '*'],
  ['*', '*', '*'],
  ['*', '*', '*']])

  const [currentCell, setCurrentCell] = useState(null)
  const [end,setEnd]=useState(false)
  const [result,setResult]=useState("")


  const handleGame=()=>{
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        document.getElementById(i+'_'+j).innerText=''

      }
    }

    setBoard([['*', '*', '*'],
                ['*', '*', '*'],
                ['*', '*', '*']])

    setEnd(false)
    setResult("")
  }

  const handleClick = () => {


    const Index = currentCell.split('_')
    board[Index[0]][Index[1]] = 'x'

    if(goal(board,'x')===0){
      console.log('Draw')

      setEnd(true)
      setResult("DRAW")
      return 
    }
    var computerMove = best_move(board)



    document.getElementById(computerMove[0].toString() + "_" + computerMove[1].toString()).innerText = 'o'

    board[computerMove[0]][computerMove[1]] = 'o'

    if (goal(board, 'o') ===1) {
      console.log('AI wins')
      

      setEnd(true)
      setResult("AI WINS")

      return 
    }
    setCurrentCell(null)
  }
  const setMove = (id) => {
    if(document.getElementById(id).innerText === 'x')
      return 

    if(document.getElementById(id).innerText === 'o')
      return 

    if (currentCell !== null) {
      document.getElementById(currentCell).innerText = ""
    }
    document.getElementById(id).innerText = 'x'
    setCurrentCell(id)
  }
  return (<>
      <div className="navbar">Tic Tac Toe</div>
      {end && <h1 style={{'textAlign':'center'}}>{result}</h1>}
    <div className="app">
      <div className="row">
        <div className="cell" id="0_0" onClick={() => setMove('0_0') }></div>
        <div className="cell" id="0_1" onClick={() => setMove('0_1')}></div>
        <div className="cell lastCol" id="0_2" onClick={() => setMove('0_2')}></div>
      </div>
      <div className="row">
        <div className="cell " id="1_0" onClick={() => setMove('1_0')}></div>
        <div className="cell" id="1_1" onClick={() => setMove('1_1')}></div>
        <div className="cell lastCol" id="1_2" onClick={() => setMove('1_2')}></div>
      </div>
      <div className="row">
        <div className="cell lastRow" id="2_0" onClick={() => setMove('2_0')}></div>
        <div className="cell lastRow" id="2_1" onClick={() => setMove('2_1')}></div>
        <div className="cell lastRow lastCol" id="2_2" onClick={() => setMove('2_2')}></div>
      </div>

      {!end && <button className='btn' onClick={handleClick}>Confirm Move</button>}
      {end && <button className='btn' onClick={handleGame}>Restart Game</button>}
    </div>
    </>
  );
}

export default App;
