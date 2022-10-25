import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes/Router';


function App() {
  return (
    <div className="">
      <RouterProvider router={router}/>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
