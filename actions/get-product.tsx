import { Product } from "@/types/product.interface";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/product/`;

const getProduct = async (id: number): Promise<Product> => {
  const res = await fetch(`${URL}${id}`);

  return await res.json();
};

export default getProduct;