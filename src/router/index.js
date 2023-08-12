import { Navigate } from 'react-router-dom'

import Detail from "@/pages/Detail"
import Home from "@/pages/Home"
import More from "@/pages/More"

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/more',
    element: <More />
  }
]

export default routes