// products: array and return number

export const totalPrice = (products) => products.reduce((sum,product) => sum + product.price, 0)