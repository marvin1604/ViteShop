import React from "react";

export const OrderCard = (props) => {
  const { id, title, imageurl, price, handleDelete } = props;

  return (
    <div className="flex justify-between items-center px-4 py-1">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-xl object-cover"
            src={imageurl[0].length > 2 ? imageurl[0] : imageurl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {handleDelete ? (
          <p className="cursor-pointer" onClick={() => handleDelete(id)}>
            X
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
