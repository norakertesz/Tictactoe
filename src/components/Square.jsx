import "../CSS/Square.css";

function Square({ symbol, onSquareClick }) {
    return (
        <div className="Square" onClick={() => onSquareClick()}>
            {symbol}
        </div>
    );

}

export default Square;