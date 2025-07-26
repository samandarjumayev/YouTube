import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './components/sideComponents/Home.jsx'
import Explore from './components/sideComponents/Explore.jsx';
import Shorts from './components/sideComponents/Shorts.jsx';
import Subscribers from './components/sideComponents/Subscribers.jsx';
import Library from './components/sideComponents/Library.jsx';
import History from './components/sideComponents/History.jsx';
import YourVideos from './components/sideComponents/YourVideos.jsx';
import WatchLater from './components/sideComponents/WatchLater.jsx';
import Pop from './components/sideComponents/Pop.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/explore',
        element: <Explore />
      },
      {
        path: '/shorts',
        element: <Shorts />
      },
      {
        path: '/subscribers',
        element: <Subscribers />
      },
      {
        path: '/library',
        element: <Library />
      },
      {
        path: '/history',
        element: <History />
      },
      {
        path: '/yourvideos',
        element: <YourVideos />
      },
      {
        path: '/watchlater',
        element: <WatchLater />
      },
      {
        path: '/pop',
        element: <Pop />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
