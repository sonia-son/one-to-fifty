import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

function Board({numbers, handleClick}) {
  
  return(
    <Container>
      {
        numbers.map((num, index) => (
          <Cell num={num} key={index} handleClick = {handleClick}/>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  width: 400px;
  height: 400px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export default Board;