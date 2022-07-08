
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import { useState } from "react";


function App() {
const[player1Symbol,setPlayer1Symbol] = useState("❌");
const[player2Symbol,setPlayer2Symbol] = useState("⭕");

  return (


    <div >
      <Header />
      <br />
      
      <br />
      <Board player1Symbol={player1Symbol} player2Symbol={player2Symbol}/>

    </div>

  );
}

export default App;
