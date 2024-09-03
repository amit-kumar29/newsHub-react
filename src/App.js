import './App.css';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import 'flowbite';
import MiddleBody from './components/MiddleBody';
import Subscribe from './components/Subscribe';
import ForgotPassword from './components/ForgotPassword';
import UpdatePassword from './components/UpdatePassword';
import RegistrationSuccessfull from './components/RegistrationSuccessfull';



const appRouter = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children: [
      {
        path:"/",
        element: <MiddleBody/>,
      },
      {
        path:"/login",
        element: <Login/>,
      },

      {
        path:"/register",
        element: <Register/>
      },
      {
        path:"/subscribe",
        element: <Subscribe/>,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword/>
      },
      {
        path: "/updatepassword",
        element: <UpdatePassword/>
      },
      {
        path: "registrationsuccessfull",
        element: <RegistrationSuccessfull/>
      }
      
    ]
}])

function App() {
  return (
    <div className="App">
      
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
