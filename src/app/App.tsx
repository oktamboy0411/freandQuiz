import { createBrowserRouter , RouterProvider } from "react-router-dom";
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Error from "../pages/Error";
import Dashboard from "../components/layout/Dashboard";
import QuizList from "../pages/quizList";
import CreateQuiz from "../pages/createQuiz";
import PlayQuiz from "../pages/playQuiz";
import Quiz from "../pages/Quiz";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
  {
    index: false, 
    element: <Layout />,
    errorElement: <Error /> ,
    children : [
      {
        path: "",
        element: <Home />
      },
      {
        path: "sign-in",
        element: <Login />
      },
      {
        path: "sign-up" ,
        element: <SignUp />
      },
      {
        path: "dashboard" ,
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <QuizList />
          },
          {
            path: ":id",
            element: <Quiz />
          },
          {
            path: "create",
            element: <CreateQuiz />
          },
          {
            path: "settings",
            element: <Settings />
          },
          {
            path: "play/:id", 
            element: <PlayQuiz />
          }
        ]
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
