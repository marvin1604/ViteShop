import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../context/index'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SingIn } from '../SingIn'
import { Navbar } from '../../Components/Navbar'
import { CheckoutSideMenu}  from '../../Components/CheckoutSidemenu'
import './App.css'


const AppRoutes = ()=>{
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-orders/:id', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/sign-in', element: <SingIn/>},

    {path: '/clothes', element: <MyAccount/>},
    {path: '/electronics', element: <MyOrder/>},
    {path: '/furnitures', element: <MyOrders/>},
    {path: '/toys', element: <SingIn/>},
    {path: '/others', element: <SingIn/>},
    {path: '/*', element: <NotFound/>}
  ])
  return routes
}
const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
