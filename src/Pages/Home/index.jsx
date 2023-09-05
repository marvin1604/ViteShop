import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { getProducts } from "../../Hooks/getProducts";
import { Loading } from "../../Components/Loading";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
export const Home = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <h1 className="font-bold m-4 text-lg">Exclusive Products</h1>
      <input
        className="border px-6  border-green-400 rounded-[50px] mb-4 w-[350px] h-[50px] focus:outline-none"
        type="text"
        placeholder="Ingresa Product"
        value={context.searchProductByName}
        onChange={(e) => context.setSearchProductByName(e.target.value)}
      />
      <div className="flex flex-wrap gap-3 justify-center items-center w-[1000px]">
        {context.filteredProducts?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
      <ProductDetail />
    </Layout>
  );
};
