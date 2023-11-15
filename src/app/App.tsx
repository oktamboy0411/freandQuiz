import { createBrowserRouter , RouterProvider } from "react-router-dom";
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    index: false, 
    element: <Layout />,
    errorElement: <Error /> ,
    children : [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sign-in",
        element: <Login />
      },
      {
        path: "/sign-up" ,
        element: <SignUp />
      }
    ]
  }
])

function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
