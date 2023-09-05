import React from "react";

export const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;

  return (
    <div className="flex justify-between items-center px-4 py-1 border border-black my-2 w-[450px] lg:h-[120px]">
      <div className="flex flex-col justify-start items-start gap-5">
        <p className="text-lg font-bold">Fecha Compra: <span className="font-light">{date}</span></p>
        <p className="text-lg font-bold">Cantidad de Productos: {totalProducts}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${totalPrice}</p>
      </div>
    </div>
  );
};
