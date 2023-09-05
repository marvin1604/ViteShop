import { createContext, useState, useEffect } from "react";

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

    //cartProducts * add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // cartProducts * my order
    const [cartOrder, setCartOrder] = useState([]);

  //ProductAll * getProducts all API
  const [productAll, setProductAll] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])

    // searchProducts
    const [searchProductByName, setSearchProductByName] = useState("");

    //SearchProductsByCategory
    const [searchByCategory,setSearchByCategory] = useState("")

  useEffect(()=>{
    async function getAllProducts(){
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await response.json()
      setProductAll(data)
    }
    getAllProducts()
  },[])

  // searchByname
  const filterByName = (products, searchByName) => {
    return products.filter((item) =>
      item.title.toLowerCase().includes(searchByName))
  };
  // console.log(filterByName(productAll, searchProductByName));
  const filterByCategory = (products, searchByCategory) => {
    return products.filter((item) =>
      item.category.name.includes(searchByCategory))
  };
  // console.log(filterByCategory(productAll, searchByCategory));
  useEffect(() => {
    if (searchProductByName && !searchByCategory) setFilteredProducts(filterByName(productAll, searchProductByName))
    if (searchByCategory && !searchProductByName) setFilteredProducts(filterByCategory( productAll, searchByCategory))
    if (!searchProductByName && !searchByCategory) setFilteredProducts(filterByName(productAll, searchProductByName))
  }, [productAll, searchProductByName, searchByCategory])

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
