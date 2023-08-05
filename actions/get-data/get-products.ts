import useAxios from "@/hooks/use-axios";
import httpClient from "@/lib/axios-instance";
import { Product } from "@/types/product.interface";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/product/get-products`;

// interface Query {
//   category_id?: string;
//   discount_id?: string;
// }

// const getProducts = async (): Promise<Product[]> => {
//   // const url = qs.stringifyUrl({
//   //   url: URL,
//   //   query: { 
//   //     discount_id: query.discount_id,
//   //     category_id: query.category_id,
//   //   },
//   // });

//   const res = await fetch(URL);

//   return res.json();
// };

// export default getProducts;


// export const GetProducts = () => {
//     const { 
//         response: getProductsResponse,
//         isLoading: getProductsIsLoading,
//         error: getProductsError,
//         refetch: getRefetch 
//     } = useAxios({
//             axiosInstance: httpClient,
//             method: 'GET',
//             url: URL,
//             requestConfig: {

//             }
//         });
//     return {
//         getProductsResponse, 
//         getProductsIsLoading, 
//         getProductsError,
//         getRefetch
//     }
// }