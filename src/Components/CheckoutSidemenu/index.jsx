import { useContext } from "react";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../Utils";
import "./index.css";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filterProducts = context.cartProducts.filter((item) => item.id != id);
    context.setCartProducts(filterProducts);
  };

  const idOrders = (length)=>{
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      id += caracteres.charAt(indiceAleatorio);
    }
  return id;
  }

  const handleCheckout = () => {
    const orderToAdd = {
      id: idOrders(10),
      date: DateTime.now().toFormat("dd/MM/yyyy hh:mm:ss a"),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setCartOrder([...context.cartOrder, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
    context.closeCheckoutSideMenuOpen();
  };
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col bg-white fixed right-0 border-4 rounded-xl scrollable-cards`}
    >
      <div className="flex justify-between p-4">
        <h2 className="font-bold">My order</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.closeCheckoutSideMenuOpen()}
        >
          X
        </div>
      </div>
      <div className="flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageurl={product.images[0]}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="flex justify-between p-4">
        <h2 className="font-bold text-lg">Total</h2>
        <div
          className="cursor-pointer font-bold text-lg"
          onClick={() => context.closeCheckoutSideMenuOpen()}
        >
          ${totalPrice(context.cartProducts)}
        </div>
      </div>
      <Link to="/my-orders/last">
        <div
          className="bg-green-600 mx-4 rounded-lg px-2 text-white text-center py-2 cursor-pointer mb-4"
          onClick={() => handleCheckout()}
        >
          CheckOut
        </div>
      </Link>
    </aside>
  );
};
