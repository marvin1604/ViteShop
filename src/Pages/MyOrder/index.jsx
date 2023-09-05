import { useContext, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../context";
import { Link } from "react-router-dom";
import { OrderCard } from "../../Components/OrderCard";

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let idPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (idPath == "last") {
    let index= context.cartOrder.length-1
    idPath = context.cartOrder?.[index].id;
  }

  const FilterOrders = (idPath) => {
    return context.cartOrder.filter((item) => item.id === idPath);
  };

  return (
    <Layout>
      <div className="lg:w-[600px] sm:w-[350px] ">
        <div className="flex flex-col items-center justify-between p-4 relative">
          <Link to="/my-orders" className="absolute left-0">
            🡸
          </Link>
          <h2 className="font-bold">My order</h2>
          <p>
            {" "}
            Fecha:{" "}
            {FilterOrders(idPath)[0].date != undefined
              ? FilterOrders(idPath)[0].date
              : "hoy"}
          </p>
        </div>
        <div className="flex-1">
          {FilterOrders(idPath)[0].products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageurl={product.images[0]}
              price={product.price}
            />
          ))}
        </div>
        <div className="flex justify-between p-4">
          <h2 className="font-bold text-lg">Total</h2>
          <div
            className="cursor-pointer font-bold text-lg"
            onClick={() => context.closeCheckoutSideMenuOpen()}
          >
            ${FilterOrders(idPath)[0].totalPrice}
          </div>
        </div>
        <Link to="/my-orders">
          <div className="bg-green-600 mx-4 rounded-lg px-2 text-white text-center py-2 cursor-pointer mb-4">
            My Orders ➜
          </div>
        </Link>
      </div>
    </Layout>
  );
};
