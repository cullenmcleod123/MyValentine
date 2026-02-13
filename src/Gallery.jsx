import React from 'react'
import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Link } from 'react-router-dom'
import './index.css'
import LightBox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
 const [isloaded, setIsLoaded] = useState(false);
 const [open, setOpen] = useState(false);
 const [currentIndex, setCurrentIndex] = useState(0);
 
 const slides = [
   { src: "/IMG_1452.jpg" },
   { src: "/IMG_0709.jpg" },
   { src: "/IMG_2835.jpg" },
   { src: "/IMG_3260.jpg" },
   { src: "/IMG_2941.jpg" },
   { src: "/IMG_5284.jpg" },
   { src: "/IMG_5686.jpg" },
   { src: "/IMG_6649.jpg" },
   { src: "/IMG_6658.jpg" },
   { src: "/image.jpg" },
   { src: "/image2.jpg" },
   { src: "/image3.jpg" },
   { src: "/image4.jpg" },
   { src: "/image5.jpg" },
   { src: "/image6.jpg" },
];
 
 const handleImageClick = (index) => {
   setCurrentIndex(index);
   setOpen(true);
 };
  return (
    <>
    {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
    <div className='bg-red-300 min-h-screen flex flex-col'>
      <Link to="/home" className="bg-red-400 text-4xl font-bold py-4 text-center text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
        <button>Welcome to MyValentine!</button>
      </Link>

      <div className='flex-1 flex items-center justify-center w-full'>
        <div className='bg-red-100 pb-5 text-center mx-4 md:mx-12 rounded-lg w-full max-w-4xl'>
          <div className='bg-red-400 p-2  text-left' >
            <h1 className='text-xl md:text-2xl'>To Melissa welcome to the gallery!</h1>
           
            </div>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 scrollbar-hide overflow-y-auto max-h-[520px] md:max-h-[630px]'>
                    {slides.map((slide, index) => (
                      <img 
                        key={index}
                        src={slide.src} 
                        alt="Melissa" 
                        className='w-full h-36 sm:h-48 md:h-48 object-cover border-4 border-red-300 rounded-lg cursor-pointer hover:opacity-80 hover:scale-105 transition-transform duration-200'
                        onClick={() => handleImageClick(index)}
                      />
                    ))}
                </div>
                
                <LightBox
                  open={open}
                  close={() => setOpen(false)}
                  slides={slides}
                  index={currentIndex}
                />
          </div>
          </div>
        </div>
      
    </>
  )
}

export default Gallery
