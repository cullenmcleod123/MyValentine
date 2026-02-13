import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './home.jsx'
import Gallery from './Gallery.jsx'
import Game from './Game.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/home', element: <Home />},
  {path: '/Gallery', element: <Gallery />},
  {path: '/Game', element: <Game />},
  {path: '*', element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
