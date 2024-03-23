
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root_layout from './Components/RootLayout/RootLayout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Transport from './Components/Transport/Transport';
import Booking from './Components/Booking/Booking';
import Accomodation from './Components/Accomodation/Accomodation';
import Hotels from './Components/Hotels/Hotels';
import Places from './Components/Places/Places';

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

      },
      {
        path:'/Transport',
        element:<Transport/>
      },
      {
        path:'/booking/:mode',
        element:<Booking/>
      },
      {
        path:'/Accomodation',
        element:<Accomodation/>
      },
      {
        path:'/hotelbooking/:id',
        element:<Hotels/>
      },
      {
        path:'/Places',
        element:<Places/>
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
