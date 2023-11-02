import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import firebaseConfig from './fireBaseConfig.jsx'
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './Pages/Registration.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import ForgotPassword from './Pages/ForgotPassword.jsx'
import { store } from './store'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
  </React.StrictMode>,
)
