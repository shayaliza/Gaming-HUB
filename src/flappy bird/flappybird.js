import React from "react";
import { useEffect, useState } from "react";
// import "./flappybird.css";
import styled from "styled-components";

const Bird_size = 20;
const Game_width = 500;
const Game_height = 500;
const Gravity = 6;
const Jump_height = 100;
const Obst_width = 40;
const Obst_gap = 200;

export default function Flappybird() {
  const [birdPosition, setBirdPosition] = useState(200); //bird position
  const [gameStart, setGameStart] = useState(false);
  const [ObstHeight, setObstHeight] = useState(500);
  const [ObstLeft, setObstLeft] = useState(Game_width - Obst_width);
  const [score, setscore] = useState(0);

  const BottonObstHeight = Game_height - Obst_gap - ObstHeight;
  // const BottonObstHeight = 200;

  useEffect(() => {
    let timeId;
    if (gameStart && birdPosition <= Game_height - Bird_size) {
      timeId = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + Gravity);
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [birdPosition, gameStart]);

  useEffect(() => {
    let ObstId;
    if (gameStart && ObstLeft >= -Obst_width) {
      ObstId = setInterval(() => {
        setObstLeft((ObstLeft) => ObstLeft - 5); //speed of obs
      }, 20);
      return () => {
        clearInterval(ObstId);
      };
    } else {
      setObstLeft(Game_width - Obst_width);
      setObstHeight(Math.floor(Math.random() * (Game_height - Obst_gap)));
      setscore((score) => score + 1);
    }
  }, [gameStart, ObstLeft]);

  useEffect(() => {
    const hasCollidedWithTopObs =
      birdPosition >= 0 && birdPosition < ObstHeight;
    const hasCollidedWithBottomObs =
      birdPosition <= 500 && birdPosition >= 500 - BottonObstHeight;

    if (
      ObstLeft >= 0 &&
      ObstLeft <= Obst_width &&
      (hasCollidedWithTopObs || hasCollidedWithBottomObs)
    ) {
      setGameStart(false);
    }
  }, [birdPosition, ObstHeight, BottonObstHeight, ObstLeft]);

  const handleClick = () => {
    let newBirdPosition = birdPosition - Jump_height;
    if (!gameStart) {
      setGameStart(true);
    } else if (newBirdPosition < 0) {
      setBirdPosition(0);
    } else {
      setBirdPosition(newBirdPosition);
    }
  };

  return (
    <Div onClick={handleClick}>
      <Gamebox height={Game_height} width={Game_width}>
        <Obstacle
          top={0}
          width={Obst_width}
          height={ObstHeight}
          left={ObstLeft}
        />
        <Obstacle
          top={Game_height - (ObstHeight + BottonObstHeight)}
          width={Obst_width}
          height={ObstHeight}
          left={ObstLeft}
        />
        <Bird size={Bird_size} top={birdPosition} />
      </Gamebox>
      <span>{score}</span>
    </Div>
  );
}

const Bird = styled.div`
  position: absolute;
  background-color: white;
  border: 2px solid black;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
`;

const Div = styled.div`
  margin-top: 3rem;
  display: flex;
  width: 100%;
  justify-content: center;
  & span {
    color: white;
    font-size: 24px;
    position: absolute;
  }
`;

const Gamebox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: gray;
  overflow: hidden;
`;

const Obstacle = styled.div`
  position: relative;
  top: ${(props) => props.top}px;
  background-color: black;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
`;
