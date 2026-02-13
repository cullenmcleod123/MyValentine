import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { useState } from 'react'
const home = () => {
  const [isloaded, setIsLoaded] = useState(false);
  return (
    <>
    {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
    <div className='bg-red-300 min-h-screen flex flex-col'>
      <div className="bg-red-400 text-4xl font-bold py-4 text-center text-white px-4 py-2 rounded">
              Welcome to MyValentine!
            </div>

      <div className='flex-1 flex items-center justify-center'>
        <div className='bg-red-100 pb-5 text-center mx-50 rounded-lg'>
          <div className='bg-red-400 p-1 text-left' >
            <h1>To Melissa</h1>
           
            </div>
            <div className='p-2 text-center flex flex-col items-center justify-center'>
              <img src="/IMG_0709.jpg" alt="heart" className='p-5 h-96 w-auto justify-center'/>

            </div>
            <p className='pb-3'>Happy Valentine's Day! baby and welcome to your custom Valentine's Day website! For our 4th Valentine i have designed this special website just for you!
              which contains some of the photos of us that i really like which you will find on the gallery page as well as a little game that i made for you to play and have fun
              i hope you like it I love you so much baby and i hope this website will make you feel special and loved.
            </p>

          <div>
            <Link to="/Gallery" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
              <button>View Gallery</button>
            </Link>
              <Link to="/Game" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ml-4">
              <button>Play Game</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default home
