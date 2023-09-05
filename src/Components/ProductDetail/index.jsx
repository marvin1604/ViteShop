import { ShoppingCartContext } from "../../context";
import { Loading } from "../Loading";
import "./index.css";
import { useContext } from "react";
export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isProductDetail ? "flex" : "hidden"
      } product-detail flex flex-col bg-white fixed right-0 border-4 rounded-xl`}
    >
      <div className="flex justify-between p-4">
        <h2>Detail</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.closeProductDetail()}
        >
          X
        </div>
      </div>
      <figure className=" px-6">
        <img
          className='w-full h-["200px"] rounded-xl object-cover'
          src={
            context.productToShow?.images?.[0].length > 2
              ? context.productToShow.images[0]
              : context.productToShow.images
          }
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-xl">
          {context.productToShow.title}
        </span>
        <span className="font-light text-md">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};
