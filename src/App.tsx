import React, { useCallback, useRef } from 'react';
import { useState, useEffect } from 'react';
import './App.css'

const Snake = () => {
  const size = [window.innerWidth / 30, window.innerWidth / 30];
  const styleSerpent = { width: size[0], height: size[1], backgroundColor: 'red' };
  const [direction, setDirection] = useState<string>('');
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  const NewDirection = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setDirection('')
      setDirection('right');
    }
    else if (event.key === 'ArrowLeft') {
      setDirection('')

      setDirection('left');
    }
    else if (event.key === 'ArrowUp') {
      setDirection('')

      setDirection('up');
    }
    else if (event.key === 'ArrowDown') {
      setDirection('')

      setDirection('down');
    }
  },[])

  const [intervalId, setIntervalId] = useState<number>();

  useEffect(() => {
    const handleKeyDown = () => {
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
    };
    setIntervalId(setInterval(handleKeyDown, 1000));
    const handleKeyDownEvent = (event: KeyboardEvent) => NewDirection(event);
    document.addEventListener('keydown', handleKeyDownEvent);
    clearInterval(intervalId);

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