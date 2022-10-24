import './App.css';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes/Router';


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
