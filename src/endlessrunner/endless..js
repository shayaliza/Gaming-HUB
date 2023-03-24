import React, { useState, useEffect } from "react";
import "./endless.css";

function EndlessRunner() {
  const [playerX, setPlayerX] = useState(50);
  const [playerY, setPlayerY] = useState(250);
  const [obstacles, setObstacles] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // move player
      setPlayerX(playerX + 5);
      // add new obstacle
      setObstacles((obstacles) => [
        ...obstacles,
        { x: 500, y: Math.random() * 400 },
      ]);
      // remove offscreen obstacles
      setObstacles((obstacles) =>
        obstacles.filter((obstacle) => obstacle.x > -50)
      );
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [playerX]);

  function handleKeyDown(event) {
    if (event.key === "ArrowUp") {
      setPlayerY(Math.max(playerY - 10, 0));
    } else if (event.key === "ArrowDown") {
      setPlayerY(Math.min(playerY + 10, 480));
    }
  }

  return (
    <div className="Appi" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="player" style={{ left: playerX, top: playerY }}></div>
      {obstacles.map((obstacle, index) => (
        <div
          key={index}
          className="obstacle"
          style={{ left: obstacle.x, top: obstacle.y }}
        ></div>
      ))}
    </div>
  );
}

export default EndlessRunner;
