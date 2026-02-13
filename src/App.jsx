import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'

import { Link } from 'react-router-dom'
function App() {
  const [isloaded, setIsLoaded] = useState(false);
  
  return (
    <>
    {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}

       <div className="bg-red-200 min-h-screen flex items-center justify-center p-4">
        <div className="textarea pb-8 bg-white rounded-lg shadow-md text-center w-full max-w-md">
          <div className='bg-red-400 p-3 text-left' >
            <h1 className='text-xl md:text-2xl'>To Melissa</h1>
          </div>
          <div className='p-5 text-center'>
            <p className='text-sm md:text-base'>Happy Valentine's Day My love! I love you so much! will you be my valentine forever?</p>

          </div>
        
        <div className="heartbox flex flex-col sm:flex-row items-center justify-center gap-3 pb-6">
         
          <Link to="/home" className="bg-red-500 text-white hover:bg-gray-600 p-3 rounded-md w-full sm:w-auto text-center"><button>yes</button></Link>
          <Link to="/" className="bg-red-500 text-white hover:bg-gray-600 p-3 rounded-md w-full sm:w-auto text-center"><button>no</button></Link>
          </div>
          </div>
       </div>

    </>
  )
}

export default App
