import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //count add cart
  const [count, setCount] = useState(0);

  //Product Detail * Open/close
  const [isProductDetail, setIsProductDetail] = useState(false);
  const openProductDetail = () => setIsProductDetail(true);
  const closeProductDetail = () => setIsProductDetail(false);

  //Checkout-side-menu * Open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenuOpen = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenuOpen = () => setIsCheckoutSideMenuOpen(false);

  //ProductDetail * show product
  const [productToShow, setProductToShow] = useState({});

  //ProductAll * getProducts all API
  const [productAll, setProductAll] = useState([]);

  //cartProducts * add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // cartProducts * my order
  const [cartOrder, setCartOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetail,
        productToShow,
        setProductToShow,
        productAll,
        setProductAll,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenuOpen,
        closeCheckoutSideMenuOpen,
        cartOrder,
        setCartOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
