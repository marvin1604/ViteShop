import React from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { Loading } from "../Loading";

export const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (data) => {
    context.closeCheckoutSideMenuOpen();
    context.openProductDetail();
    context.setProductToShow(data);
  };

  const addProduct = (data) => {
    context.setCount(context.count + 1);
    context.closeProductDetail();
    context.openCheckoutSideMenuOpen();
    context.setCartProducts([...context.cartProducts, data]);
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    return isInCart ? (
      <div
        className="absolute top-1 right-1 flex justify-center items-center bg-white rounded-full h-6 w-6 font-bold"
      >
        ✔
      </div>
      
    ) : (
      <div
        className="absolute top-1 right-1 flex justify-center items-center bg-white rounded-full h-6 w-6 font-bold"
        onClick={() => addProduct(data)}
      >
        ➕
      </div>
    );
  };

  const ocultarImagen = ()=>{
    const miImagen = document.getElementById("miImagen");
    miImagen.style.display = "none";
  }

  return data.images[0].length? (
    <div className="bg-white cursor-pointer w-64 h-96 shadow-xl border rounded-lg">
      <figure className="relative mb-4 w-full h-4/5 flex items-center">
        <span className="absolute bottom-2 left-2 bg-gray-100 p-0.5 rounded-lg text-sm">
          {data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg p-1"
          src={data.images[0].length > 1 ? data.images[0] : data.images}
          alt=""
          onerror={()=> ocultarImagen()}
          onClick={() => showProduct(data)}
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="mx-2 font-light text-xs">{data.title}</span>
        <span className="mx-2 font-medium">${data.price}</span>
      </p>
    </div>
  ):
  <h2>Hola</h2>;
};
