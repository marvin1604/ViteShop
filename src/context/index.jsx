import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const initialzeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem("account");
  const signOutInLocalStorage = localStorage.getItem("sign-out");
  let parsedAccount;
  let parsedSignOut;

  if (!accountInLocalStorage) {
    localStorage.setItem("account", JSON.stringify({}));
    parsedAccount = {};
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage);
  }
  if (!signOutInLocalStorage) {
    localStorage.setItem("sign-out", JSON.stringify({}));
    parsedSignOut = {};
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage);
  }
};
export const ShoppingCartProvider = ({ children }) => {
  //My account
  const [account, setAccount] = useState({});
  initialzeLocalStorage()

  //SignOut
  const [signOut, setSignOut] = useState(false);
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

  //cartProducts * add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // cartProducts * my order
  const [cartOrder, setCartOrder] = useState([]);

  //ProductAll * getProducts all API
  const [productAll, setProductAll] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // searchProducts
  const [searchProductByName, setSearchProductByName] = useState("");

  //SearchProductsByCategory
  const [searchByCategory, setSearchByCategory] = useState("");

  useEffect(() => {
    async function getAllProducts() {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setProductAll(data);
    }
    getAllProducts();
  }, []);

  // searchByname
  const filterByName = (products, search) => {
    return products.filter((item) =>
      item.title?.toLowerCase().includes(search)
    );
  };
  const filterByCategory = (products, search) => {
    return products.filter((item) => item.category?.name.includes(search));
  };

  const filterBy = (
    searchType,
    productAll,
    searchProductByName,
    searchByCategory
  ) => {
    if (searchType === "BY_TITLE") {
      return filterByName(productAll, searchProductByName);
    }
    if (searchType === "BY_CATEGORY") {
      return filterByCategory(productAll, searchByCategory);
    }
    if (searchType === "BY_TITLE_AND_BY_CATEGORY") {
      return filterByCategory(productAll, searchByCategory).filter((item) =>
        item.title?.toLowerCase().includes(searchProductByName)
      );
    }
    if (!searchType) {
      return productAll;
    }
  };
  useEffect(() => {
    if (searchProductByName && searchByCategory)
      setFilteredProducts(
        filterBy(
          "BY_TITLE_AND_BY_CATEGORY",
          productAll,
          searchProductByName,
          searchByCategory
        )
      );
    if (searchProductByName && !searchByCategory)
      setFilteredProducts(
        filterBy("BY_TITLE", productAll, searchProductByName, searchByCategory)
      );
    if (!searchProductByName && searchByCategory)
      setFilteredProducts(
        filterBy(
          "BY_CATEGORY",
          productAll,
          searchProductByName,
          searchByCategory
        )
      );
    if (!searchProductByName && !searchByCategory)
      setFilteredProducts(
        filterBy(null, productAll, searchProductByName, searchByCategory)
      );
  }, [productAll, searchProductByName, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
        account,
        setAccount,
        signOut,
        setSignOut,
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
        searchProductByName,
        setSearchProductByName,
        searchByCategory,
        setSearchByCategory,
        filteredProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
