
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root_layout from './Components/RootLayout/RootLayout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
function App() {
  
  let router = createBrowserRouter([{
    path:'',
    element: <Root_layout/>,
    children:[
      {
        path:'',
        element: <Home/>
      },
      {
        path:'/Home',
        element:<Home/>
      },
      {
        path:'/signup',
        element: <SignUp/>

      },
      {
        path:'/SignIn',
        element:<Login/>

      }
    ]
   }])
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
