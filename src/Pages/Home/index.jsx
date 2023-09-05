import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { getProducts } from "../../Hooks/getProducts";
import { Loading } from "../../Components/Loading";
import { useParams } from "react-router-dom";
export const Home = () => {
  const products = getProducts();

  const [searchProduct, setSearchProduct] = useState("");
  
  const ProductsFilters = () => {
    return products.filter((item) =>
      item.title.toLowerCase().includes(searchProduct)
    );
  };
  
  return (
    <Layout>
      <h1 className="font-bold m-4 text-lg">Exclusive Products</h1>
      <input
        className="border px-6  border-green-400 rounded-[50px] mb-4 w-[350px] h-[50px] focus:outline-none"
        type="text"
        placeholder="Ingresa Product"
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
      />
      <div className="flex flex-wrap gap-3 justify-center items-center w-[1000px]">
        {ProductsFilters()?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
      <ProductDetail />
    </Layout>
  );
};
