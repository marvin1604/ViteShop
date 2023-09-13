import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCartContext, ShoppingCartProvider } from '../../context/index'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SingIn } from '../SingIn'
import { Navbar } from '../../Components/Navbar'
import { CheckoutSideMenu}  from '../../Components/CheckoutSidemenu'
import './App.css'
import { useContext } from 'react'


const AppRoutes = ()=>{
  const context = useContext(ShoppingCartContext)
  //Account 
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  //SignOut
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  // has a account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage
  const isUserSignOut = context.signOut || parsedSignOut

  
  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home/>: <Navigate replace to={'sign-in'}/>},
    {path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home/>: <Navigate replace to={'sign-in'}/>},
    {path: '/furnitures', element: hasUserAnAccount && !isUserSignOut ? <Home/>: <Navigate replace to={'sign-in'}/>},
    {path: '/shoes', element: hasUserAnAccount && !isUserSignOut ? <Home/>: <Navigate replace to={'sign-in'}/>},
    {path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home/>: <Navigate replace to={'sign-in'}/>},
    
    
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-orders/:id', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/sign-in', element: <SingIn/>},

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
