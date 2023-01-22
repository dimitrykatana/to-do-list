import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import './App.css'

const Snake = () => {
  const [size, setSize] = useState<[number, number]>([0, 0]);
  const styleSerpent = { width: size[0], height: size[1], backgroundColor: 'red' };
  const [direction, setDirection] = useState<string>('');
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  const NewDirection = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setDirection('right');
    }
    else if (event.key === 'ArrowLeft') {
      setDirection('left');
    }
    else if (event.key === 'ArrowUp') {
      setDirection('up');
    }
    else if (event.key === 'ArrowDown') {
      setDirection('down');
    }
  }

  const [intervalId, setIntervalId] = useState<number>();
  const [previousDirection, setPreviousDirection] = useState<string>(direction);

  useEffect(() => {
      setSize([window.innerWidth / 30, window.innerWidth / 30]);

const handleKeyDown = () => {
  if (direction !== previousDirection) {
    setPreviousDirection(direction);
    if (direction === 'right') {
      setPosition(([x, y]) => [x + 10, y])
    }
    if (direction === 'left') {
      setPosition(([x, y]) => [x - 10, y]);
    }
    if (direction === 'up') {
      setPosition(([x, y]) => [x, y - 10]);
    }
    if (direction === 'down') {
      setPosition(([x, y]) => [x, y + 10]);
    }
  }
};
      setIntervalId(setInterval(handleKeyDown, 100));
      const handleKeyDownEvent = (event: KeyboardEvent) => NewDirection(event);
      document.addEventListener('keydown', handleKeyDownEvent);
    
      return () => {
        document.removeEventListener('keydown', handleKeyDownEvent);
        clearInterval(intervalId);
      }
    }, [direction]);
  
  return (
    <div
      style={{ ...styleSerpent, position: 'absolute', left: position[0], top: position[1] }}
    >
    </div>
  );
}

function App(): JSX.Element {
  return (
    <div className="App">
      <Snake />
    </div>
  );
}

export default App;