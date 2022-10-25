import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../components/Header/Home"
import Courses from "../../components/Courses/Courses";
import Faq from "../../components/Faq/Faq";
import Blog from "../../components/Blog/Blog";
import Login from "../../components/Login/Login";
import Register from "../../components/Login/Register"

export const router = createBrowserRouter([
  {path : '/' , 
   element : <Main/> ,
   children : [
      {path : '/' , element : <Home/> },
      {path : '/home' , element : <Home/>},
      {path : '/courses' , element : <Courses/>},
      {path : '/faq' , element : <Faq/>},
      {path : '/blog' , element : <Blog/>},
      {path : '/login' , element : <Login/>},
      {path : '/register' , element : <Register/>},

  ]}
])