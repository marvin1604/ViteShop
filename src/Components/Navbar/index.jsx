import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

export const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  const singOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(singOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
  };
  console.log(context.account);
  return (
    <nav className="bg-green-500 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3 text-cyan-50 font-mono">
        <li className="text-lg font-bold">
          <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>ViteShop</NavLink>
        </li>
        <li>
          <NavLink
            to={`${isUserSignOut ? '/sign-in' : '/'}`}
            onClick={() => context.setSearchByCategory("")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${isUserSignOut ? '/sign-in' : '/shoes'}`}
            // onClick={()=> context.setSearchByCategory('Clothes')}
            onClick={() => context.setSearchByCategory("Shoes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${isUserSignOut ? '/sign-in' : '/electronics'}`}
            // to="/electronics"
            onClick={() => context.setSearchByCategory("Electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
          to={`${isUserSignOut ? '/sign-in' : '/furniture'}`}
            // to="/furnitures"
            onClick={() => context.setSearchByCategory("Furniture")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
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
            to={`${isUserSignOut ? '/sign-in' : '/others'}`}
            // to="/others"
            onClick={() => context.setSearchByCategory("Others")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3 text-cyan-50 font-mono">
        {isUserSignOut ? (
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}
            >
              Sign in
            </NavLink>
          </li>
        ) : (
            <ul className="flex items-center gap-3 text-cyan-50 font-mono">
            <li className="text-black/50">{context.account.email}</li>
            <li>
              <NavLink
                to="/my-orders"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-account"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My Account
              </NavLink>
            </li>
            <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}
            >
              Sign out
            </NavLink>
          </li>
            <li># {context.count}</li>
          </ul>

          
        )}

      </ul>
    </nav>
  );
};
