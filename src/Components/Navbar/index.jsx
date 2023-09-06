import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'

export const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"
  return (
    <nav className='bg-green-500 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
        <ul className='flex items-center gap-3 text-cyan-50 font-mono'>
            <li className='text-lg font-bold'>
                <NavLink
                to='/'
                >
                ViteShop
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/'
                onClick={()=> context.setSearchByCategory('')}
                className={({isActive})=>
                isActive? activeStyle : undefined
                }>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/clothes'
                // onClick={()=> context.setSearchByCategory('Clothes')}
                onClick={()=> context.setSearchByCategory('nuevo')}
                className={({isActive})=>
                isActive? activeStyle : undefined
                }>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/electronics'
                onClick={()=> context.setSearchByCategory('Electronics')}
                className={({isActive})=>
                isActive? activeStyle : undefined
                }>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/furnitures'
                onClick={()=> context.setSearchByCategory('Furniture')}
                className={({isActive})=>
                isActive? activeStyle : undefined
                }>
                    Furnitures
                </NavLink>
            </li>
            {/* <li>
                <NavLink
                to='/toys'
                onClick={()=> context.setSearchByCategory('Toy')}
                className={({isActive})=>
                isActive? activeStyle : undefined
                }>
                    Toys
                </NavLink>
            </li> */}
            <li>
                <NavLink
                to='/others'
                onClick={()=> context.setSearchByCategory('Others')}
                className={({isActive})=>
                isActive? activeStyle : undefined
                }>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-3 text-cyan-50 font-mono'>
            <li className='text-black/50'>
                walter@gmail.com
            </li>
            <li>
                <NavLink
                to='/my-orders'
                className={({isActive})=>
                isActive? activeStyle : undefined
                }>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/my-account'
                className={({isActive})=>
                isActive? activeStyle : undefined
                }>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/sign-in'
                className={({isActive})=>
                isActive? activeStyle : undefined
                }>
                    Sign in
                </NavLink>
            </li>
            <li>
                # {context.count}
            </li>
            
        </ul>
    </nav>
  )
}
