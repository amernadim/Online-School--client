import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../components/Header/Home"
import Courses from "../../components/Courses/Courses";
import Faq from "../../components/Faq/Faq";
import Blog from "../../components/Blog/Blog";
import Login from "../../components/Login/Login";
import Register from "../../components/Login/Register";
import CourseDetails from "../../components/Courses/CourseDetails";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Cheakout from "../../components/Courses/Cheakout";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Profile from "../../components/Profile/Profile";

export const router = createBrowserRouter([
  {path : '/' , 
   element : <Main/> ,
   errorElement: <ErrorPage/>  ,
   children : [
      {path : '/' , element : <Home/> },
      {path : '/home' , element : <Home/>},
      {path : '/courses' , element : <Courses/>, 
      loader : () => fetch('https://online-school-server-amernadim.vercel.app/allCourses')
      },
      {path : '/faq' , element : <Faq/>},
      {path : '/blog' , element : <Blog/>},
      {path : '/login' , element : <Login/>},
      {path : '/register' , element : <Register/>},
      {path : '/details/:id' , element : <CourseDetails/>,
      loader : ({params}) => fetch(`https://online-school-server-amernadim.vercel.app/course/${params.id}`)
      },
      {path : '/cheakout/:id' , element : <PrivateRoute><Cheakout/></PrivateRoute>,
      loader : ({params}) => fetch(`https://online-school-server-amernadim.vercel.app/course/${params.id}`)
      },
      {path : '/profile' , element : <Profile/>}

  ]}
])