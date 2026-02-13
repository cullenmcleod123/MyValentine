import React from 'react'
import { useState, useEffect } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Link } from 'react-router-dom'
import './index.css'

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };

const Game = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [nextDirection, setNextDirection] = useState({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch(e.key) {
        case 'ArrowUp':
          if(direction.y === 0) setNextDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if(direction.y === 0) setNextDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if(direction.x === 0) setNextDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if(direction.x === 0) setNextDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  useEffect(() => {
    if(gameOver) return;
    
    const interval = setInterval(() => {
      setDirection(nextDirection);
      setSnake(prevSnake => {
        const head = prevSnake[0];
        const newHead = { x: head.x + nextDirection.x, y: head.y + nextDirection.y };
        
        if(newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
          setGameOver(true);
          return prevSnake;
        }
        
        if(prevSnake.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }
        
        let newSnake = [newHead, ...prevSnake];
        
        if(newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 1);
          let newFood;
          do {
            newFood = { x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) };
          } while(newSnake.some(seg => seg.x === newFood.x && seg.y === newFood.y));
          setFood(newFood);
        } else {
          newSnake = newSnake.slice(0, -1);
        }
        
        return newSnake;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [gameOver, nextDirection, food]);
  return (
    <>
    {/* {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>} */}
    <div className='bg-red-200 min-h-screen flex flex-col'>
      <Link to="/home" className="bg-red-300 text-4xl font-bold py-4 text-center text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
        <button>Welcome to MyValentine!</button>
      </Link>

      <div className='flex-1 flex items-center justify-center'>
        <div className='bg-red-300 pb-5 text-center mx-50 rounded-lg'>
          <div className='bg-red-400 p-1 text-left' >
            <h1>To Melissa welcome to the game of snake!</h1>
           
            </div>
            <div className='flex flex-col items-center gap-4'>
              <div className='text-2xl font-bold'>Score: {score}</div>
              <div className='relative bg-red-100 border-red-300' style={{ width: '400px', height: '400px' }}>
                {[...Array(GRID_SIZE)].map((_, y) => (
                  [...Array(GRID_SIZE)].map((_, x) => {
                    const isSnake = snake.some(seg => seg.x === x && seg.y === y);
                    const isFood = food.x === x && food.y === y;
                    return (
                      <div
                        key={`${x}-${y}`}
                        style={{
                          position: 'absolute',
                          left: `${x * 20}px`,
                          top: `${y * 20}px`,
                          width: '20px',
                          height: '20px',
                          backgroundColor: isSnake ? '#ff83a2' : isFood ? '#ff6b6b' : 'transparent',
                          border: '0.5px solid rgba(0, 0, 0, 0.19)'
                        }}
                      />
                    );
                  })
                ))}
              </div>
              {gameOver && (
                <div className='text-center'>
                  <div className='text-2xl font-bold text-red-600'>Game Over!</div>
                  <button 
                    onClick={() => {
                      setSnake(INITIAL_SNAKE);
                      setFood(INITIAL_FOOD);
                      setDirection({ x: 1, y: 0 });
                      setNextDirection({ x: 1, y: 0 });
                      setGameOver(false);
                      setScore(0);
                    }}
                    className='mt-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600'
                  >
                    Play Again
                  </button>
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      
    </>
  )
}

export default Game
