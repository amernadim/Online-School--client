import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../components/Header/Home"
import Courses from "../../components/Courses/Courses";
import Faq from "../../components/Faq/Faq";
import Blog from "../../components/Blog/Blog";
import Login from "../../components/Login/Login";
import Register from "../../components/Login/Register";
import CourseDetails from "../../components/Courses/CourseDetails";

export const router = createBrowserRouter([
  {path : '/' , 
   element : <Main/> ,
   children : [
      {path : '/' , element : <Home/> },
      {path : '/home' , element : <Home/>},
      {path : '/courses' , element : <Courses/>, 
      loader : () => fetch('http://localhost:5000/allCourses')
      },
      {path : '/faq' , element : <Faq/>},
      {path : '/blog' , element : <Blog/>},
      {path : '/login' , element : <Login/>},
      {path : '/register' , element : <Register/>},
      {path : '/details/:id' , element : <CourseDetails/>,
      loader : ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
      },

  ]}
])