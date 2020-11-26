import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import Board from "./Board";
import Timer from "./Timer";

let arr = Array.from({length: 25}, (x, i) => i + 1);

function OneToFifty() {
  const [numbers, setNumbers] = useState(arr);
  const [gameFlag, setGameFlag] = useState(false);
  const [current, setCurrent] = useState(1);

  const handleClick = (i) => {
    console.log(i);
    if(gameFlag) {
      if(i === current){
        if(i === 50) {
          console.log("End");
          endGame();
        }
        const index = numbers.indexOf(i);
        const next = i > 25 ? 0 : 25 + i;
        let newNumbers = numbers.slice();
        newNumbers.splice(index, 1, next);
        setNumbers(newNumbers);
        
        setCurrent(current + 1)
      }
    }
  };

  const startGame = () => {
    setNumbers(shuffleArray(arr));
    setCurrent(1);
    setGameFlag(true);
  };

  const endGame = () => {
    setGameFlag(false);
  };

  return (
  <Container>
    <Board numbers = {numbers} handleClick={handleClick}/>
    { gameFlag ? 
      (<Timer/>) :
      (<StartButton onClick={startGame}>Start Game</StartButton>
    )}
    
  </Container>);
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array);
  return array;
};

const StartButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 50px;

  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  border: 1px solid black;
  margin: auto;
`;

export default OneToFifty;