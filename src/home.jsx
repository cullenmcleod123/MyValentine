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
    <div className='bg-red-300 min-h-screen flex flex-col items-center'>
      <div className="bg-red-400 text-3xl md:text-4xl font-bold py-4 text-center text-white px-4 rounded w-full">
              Welcome to MyValentine!
            </div>

      <div className='flex-1 flex items-center justify-center w-full'>
        <div className='bg-red-100 pb-5 text-center mx-4 md:mx-12 rounded-lg w-full max-w-2xl'>
          <div className='bg-red-400 p-2 text-left' >
            <h1 className='text-xl md:text-2xl font-semibold'>To Melissa</h1>
           
            </div>
            <div className='p-2 text-center flex flex-col items-center justify-center'>
              <img src="/IMG_0709.jpg" alt="heart" className='p-5 h-48 md:h-96 w-auto max-w-full rounded-lg object-cover'/>

            </div>
            <p className='pb-3 text-sm md:text-base px-4 md:px-0'>Happy Valentine's Day! baby and welcome to your custom Valentine's Day website! For our 4th Valentine i have designed this special website just for you!
              which contains some of the photos of us that i really like which you will find on the gallery page as well as a little game that i made for you to play and have fun
              i hope you like it I love you so much baby and i hope this website will make you feel special and loved.
            </p>

          <div className='flex flex-col sm:flex-row gap-3 items-center justify-center px-4'>
            <Link to="/Gallery" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-full sm:w-auto text-center">
              <button>View Gallery</button>
            </Link>
              <Link to="/Game" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-full sm:w-auto text-center">
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
