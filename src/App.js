
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import TransactionGraph from './components/TransactionGraph/TransactionGraph'
import CustomerTable from './components/CustomerTable/CustomerTable'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';

const router=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
{path:'',element: <ProtectedRoute><Home/></ProtectedRoute>},
{path:'home',element:<ProtectedRoute><Home/></ProtectedRoute>},
{path:'customer',element:<ProtectedRoute><CustomerTable/></ProtectedRoute>},
{path:'transaction',element:<ProtectedRoute><TransactionGraph/></ProtectedRoute>},
{path:'*',element:<Notfound/>}
]
}
])
function App() {

  return (
   
    <RouterProvider router={router}></RouterProvider>
   
  );
}

export default App;
