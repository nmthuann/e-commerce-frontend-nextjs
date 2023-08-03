import { Product } from "@/types/product.interface";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/product/get-products/brand`;


const getProductBrandsByCategoryId = async (category_id?: number): Promise<string[]> => {

  const res = await fetch(`${URL}/brand/${category_id}`);

  return res.json();
};
export default getProductBrandsByCategoryId;