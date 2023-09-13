import React, { useContext, useRef, useState } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../context";
import { Link, Navigate } from "react-router-dom";

export const SingIn = () => {
  const context = useContext(ShoppingCartContext);
  const [view,setView] =useState('user-info')
  const form = useRef(null)

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  // has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const hadleSignIn = () =>{
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out' , stringifiedSignOut)
    context.setSignOut(false)
    /// Redirect
    return <Navigate replace to={'/perro/'} />
  }
  
  const createAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name : formData.get('name'),
      email : formData.get('email'),
      password : formData.get('password')
    }
    ///createAccount
    const stringifyAccount = JSON.stringify(data)
    localStorage.setItem('account' , stringifyAccount)
    context.setAccount(data)
    /// Sign In
    hadleSignIn()
  }

  const renderLogin = () =>{
    return(
      <div className="flex flex-col w-[350px] justify-center">
        <div className="flex justify-between m-4 h-10 items-center ">
          <label htmlFor="" className="mx-2 ">
            Email:
          </label>
          <input
            type="text"
            placeholder="correo@gmail.com"
            className="w-full border rounded-md px-4 h-10"
            value={parsedAccount?.email}
          />
        </div>
        <div className="flex justify-between m-4 h-10 items-center ">
          <label htmlFor="" className="mx-2">
            Password:
          </label>
          <input
            type="text"
            placeholder="**********"
            className="w-full border rounded-md px-4 h-10"
            value={parsedAccount?.password}
          />
        </div>
        <Link to='/'>
        <button
          className="bg-green-600 mx-4 rounded-lg px-2 text-white text-center py-2 cursor-pointer w-[320px]"
          disabled={!hasUserAnAccount}
          onClick={() => hadleSignIn()}
        >
          Log in
        </button>
        </Link>
        <a href="" className="text-center my-4">
          Forgot my pasword
        </a>
        <button
          className="bg-white mx-4 rounded-lg px-2 text-green-600 border border-green-600 text-center py-2 cursor-pointer"
          disabled={hasUserAnAccount}
          onClick={() => setView('create-user-info')}
        >
          Sign up
        </button>
      </div>
    )
  }
  const renderCreateUserInfo = () => {
    return(
      <form ref={form}>
        <div className="flex flex-col w-[350px] justify-center">
        <div className="flex flex-col justify-between m-4 ">
          <label htmlFor="name" className="mx-2">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Peter"
            defaultValue={parsedAccount?.name}
            className="w-full border rounded-md px-4 h-10 focus:border-indigo-400 focus:outline-none"          />
          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            Invalid username field !
          </span>
        </div>
        <div className="flex flex-col justify-between m-4 ">
          <label htmlFor="email" className="mx-2">
            Your Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Peter"
            className="w-full border rounded-md px-4 h-10"
            defaultValue={parsedAccount?.email}
          />
        </div>
        
        <div className="flex flex-col justify-between m-4">
          <label htmlFor="password" className="mx-2">
            Password:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="**********"
            className="w-full border rounded-md px-4 h-10"
            defaultValue={parsedAccount?.password}
          />
        </div>
        <button
          className="bg-green-600 mx-4 rounded-lg px-2 text-white border border-green-600 text-center py-2 cursor-pointer"
          disabled={hasUserAnAccount}
          onClick={() => createAccount()}
        >
          Create
        </button>
      </div>
      </form>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()
  return (
    <Layout>
      <h1 className="my-4 text-xl font-bold">Bienvenido</h1>
      {renderView()}
    </Layout>
  );
};
