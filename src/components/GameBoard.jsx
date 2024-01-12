import React, { useState } from "react";



const GameBoard = ({ onSelectSquare, board }) => {



    // const [ gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     //this function has the duty to change null in the initialGameBoard , for x or o, based on wich players turn.
    //     // is necessaryy to update the gameBoard based on the preview state.
    //     setGameBoard((prevGameBoard) => {
    //         //manipulate the preview gameBoard based on the rows Arrays and the col Arrays(null)
    //         //create a const who carry the prevBoard data and after we execute the function will be automaticly updated.
    //         //inside this new updated array, we have the columns, in the inicial state, they are null. but we need to update then as well. for this, use use the map() method for create the columns.
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard

            

    //     });
        
    //     onSelectSquare()
    // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
