import { Product } from "@/types/product.interface";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/product/get-products/category?`;

// interface Query {
//   category_id?: number;
// }

const getProductsByCategoryId = async (category_id?: number): Promise<Product[]> => {
//   const url = qs.stringifyUrl({
//     url: URL,
//     query: { 
//       category_id: query.category_id,
//     },
//   });

  const res = await fetch(`${URL}category_id=${category_id}`);

  return res.json();
};
export default getProductsByCategoryId;