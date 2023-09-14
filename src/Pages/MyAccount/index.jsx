import React, { useContext, useRef, useState } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../context";
import { Link, Navigate } from "react-router-dom";

export const MyAccount = () => {
  
  const context = useContext(ShoppingCartContext);
  const [view,setView] =useState('user-info')
  const form = useRef(null)

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  
  const EdithAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name : formData.get('name'),
      email : formData.get('email'),
      password : formData.get('password')
    }
    ///EdithAccount
    const stringifyAccount = JSON.stringify(data)
    localStorage.setItem('account' , stringifyAccount)
    context.setAccount(data)
    setView('user-info')
    // return <Navigate replace to={'/'} />

  }

  const renderAccount = () =>{
    return(
      <div className="flex flex-col w-[350px] justify-center">
        <div className="flex flex-col justify-between m-4 h-20">
          <label htmlFor="" className="mx-2 ">
            Name:
          </label>
          <input
            type="text"
            readOnly
            placeholder="correo@gmail.com"
            className="w-full border rounded-md px-4 h-10"
            value={parsedAccount?.name}
          />
        </div>
        <div className="flex flex-col justify-between m-4 h-20 ">
          <label htmlFor="" className="mx-2 ">
            Email:
          </label>
          <input
            type="text"
            readOnly
            placeholder="correo@gmail.com"
            className="w-full border rounded-md px-4 h-10"
            value={parsedAccount?.email}
          />
        </div>
        <div className="flex flex-col justify-between m-4 h-20">
          <label htmlFor="" className="mx-2">
            Password:
          </label>
          <input
            type="text"
            readOnly
            placeholder="**********"
            className="w-full border rounded-md px-4 h-10"
            value={parsedAccount?.password}
          />
        </div>
        <button
          className="bg-green-600 mx-4 rounded-lg px-2 text-white text-center py-2 cursor-pointer w-[320px]"
          onClick={() => setView('edit-account')}
        >
          Editar
        </button>
      </div>
    )
  }
  const renderEditAccount = () => {
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
        <Link to='/'>
          <button
            className="bg-green-600 mx-4 rounded-lg px-2 text-white border border-green-600 text-center py-2 cursor-pointer w-[320px]"
            onClick={() => EdithAccount()}
          >
            Guardar
          </button>
        </Link>
      </div>
      </form>
    )
  }

  const renderView = () => view === 'edit-account' ? renderEditAccount() : renderAccount()
  return (
    <Layout>

      <h1 className="my-4 text-xl font-bold">Datos Personales</h1>
      {renderView()}
    </Layout>
  );
}
