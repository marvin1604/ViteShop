import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../context";
import { OrdersCard } from "../../Components/OrdersCard";
import { Link } from "react-router-dom";
export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      {context.cartOrder.length > 0 ? (
        <Layout>
          <div className="lg:w-[700px] md:lg:w-[650px] sm:w-[350px] ">
            <div className="flex items-center justify-center p-4 relative">
              <Link to="/my-orders/last" className="absolute left-0">
                🡸
              </Link>
              <h2 className="font-bold">My Orders</h2>
            </div>
            <div className="flex-1">
              {context.cartOrder?.map((order) => (
                <Link key={`${order.id}`} to={`${order.id}`}>
                  <OrdersCard
                    key={order.id}
                    totalPrice={order.totalPrice}
                    totalProducts={order.totalProducts}
                    date={order.date}
                  />
                </Link>
              ))}
            </div>
            <div className="flex justify-between p-4">
              {/* <h2 className="font-bold text-lg">Total</h2> */}
              <div
                className="cursor-pointer font-bold text-lg"
                onClick={() => context.closeCheckoutSideMenuOpen()}
              >
                {/* ${context.cartOrder?.slice(-1)[0].totalPrice} */}
              </div>
            </div>
            {/* <Link to="/my-orders/last">
          <div
            className="bg-green-600 mx-4 rounded-lg px-2 text-white text-center py-2 cursor-pointer mb-4"
            onClick={() => handleCheckout()}
          >
            CheckOut
          </div>
        </Link> */}
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className="flex flex-col items-center justify-between p-4">
            <h2 className="font-bold">My Orders</h2>
          </div>
          <div>No tienes ordenes</div>
        </Layout>
      )}
    </>
  );
};
