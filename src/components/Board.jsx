
import Square from "./Square";
import "../CSS/Board.css";
import { useEffect, useState } from "react";


const Board = ({player1Symbol, player2Symbol})=> {
    const [squares, setSquares] = useState((Array(9).fill(null)));
    const [currentPlayer, setCurrentPlayer] = useState(player1Symbol);
    const[hasWon, setHasWon]=useState(false);
    const [isDraw,setIsDraw]=useState(false);

    const switchPlayer = () => {
        if (currentPlayer === player1Symbol) {
            setCurrentPlayer(player2Symbol)

        } else {
            setCurrentPlayer(player1Symbol)
        }
    }


    const handleSquareClick = (index) => {
        if (squares[index] !== null || hasWon) {
            return;
        }
        const newSquares = [...squares];
        newSquares[index] = currentPlayer;
        setSquares(newSquares);
    }
    useEffect(() => {
        checkEndGame();
    }, [squares]
);

    const checkEndGame = () => {
        //3 in row, colum,diagonal
        if (
            (currentPlayer === squares[0] && squares[0] === squares[1] && squares[1] === squares[2]) ||
            (currentPlayer === squares[3] && squares[3] === squares[4] && squares[4] === squares[5]) ||
            (currentPlayer === squares[6] && squares[6] === squares[7] && squares[7] === squares[8])
        ) {
            setHasWon(true);
            return;
        }
        if (

            (currentPlayer === squares[0] && squares[0] === squares[3] && squares[3] === squares[6]) ||
            (currentPlayer === squares[1] && squares[1] === squares[4] && squares[4] === squares[7]) ||
            (currentPlayer === squares[2] && squares[2] === squares[5] && squares[5] === squares[8])
        ) {
            setHasWon(true);;
            return;
        }
        if (

            (currentPlayer === squares[0] && squares[0] === squares[4] && squares[4] === squares[8]) ||
            (currentPlayer === squares[2] && squares[2] === squares[4] && squares[4] === squares[6])

        ) {
            setHasWon(true);;
            return;
        }



        if (squares.find(element => element === null) === undefined) {
            setIsDraw(true);;
            return;
        }



        switchPlayer();
    }

    const resetBoard = () => {
        setSquares(Array(9).fill(null));
        setCurrentPlayer(player1Symbol);
        setHasWon(false);
        setIsDraw(false);
    }

    return (
        <>

            <div className="Board">
               
                {squares.map((element, index) =>
                    <Square key={index} symbol={element} onSquareClick={() => handleSquareClick(index)} />)
                }

            </div>
            {hasWon && <div> <p>Player {currentPlayer} won! <br /> <br /> 🏆 </p> </div>}
            {isDraw && <div> <p>It is a DRAW! </p></div>}
            <br />
            <button onClick={() => { resetBoard(); }} className="resetBtn">Reset</button>
        </>
    );

}


export default Board;