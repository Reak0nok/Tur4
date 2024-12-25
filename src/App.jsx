import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './routes/Home/Home'
import { LogIn } from './routes/Login/LogIn'
import { Registration } from './routes/Registration/Registration'
import { Profile } from "./routes/Profile/Profile"
import s from "./App.module.css"
import { Support } from "./routes/Support/Support"

let router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <LogIn />
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/support',
    element: <Support />
  }
])

export function App() {
  return <RouterProvider router={router} />
};

