import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'

import { Link } from 'react-router-dom'
function App() {
  const [isloaded, setIsLoaded] = useState(false);
  
  return (
    <>
    {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}

       <div class="bg-red-200 min-h-screen flex items-center justify-center">
        <div className="textarea pb-20  bg-white rounded-lg shadow-md text-center">
          <div className='bg-red-400 p-3 text-left' >
            <h1>To Melissa</h1>
          </div>
          <div className='p-5 text-center'>
            <p>Happy Valentine's Day My love! I love you so much! will you be my valentine forever?</p>

          </div>
          <br />
        
        <div className="heartbox">
         
          <Link to="/home" className="bg-red-500 text-white hover:bg-gray-600 p-3 m-2 rounded-md"><button>yes</button></Link>
          <Link to="/" className="bg-red-500 text-white hover:bg-gray-600 p-3 m-2 rounded-md"><button>no</button></Link>
          </div>
          </div>
       </div>

    </>
  )
}

export default App
