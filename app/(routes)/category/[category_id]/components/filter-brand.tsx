"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/ui/button-actions";
import { cn } from "@/lib/utils";
// import { Color, Size } from "@/types";

interface FilterProps {
  brands: string[];
};

const Filter: React.FC<FilterProps> = ({
  brands
}) => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get('brand');
  const onClick = (brand: string) => {

    // const test_url = `http://localhost:3000/product/get-products/brand?category_id=1&brand=Hublot`

    // const current = qs.parse(searchParams.toString());

    // const query = {
    //   ...current,
    //   brands: brand
    // };

    // if (current[brand] === brand) {
    //   query[brand] = null;
    // }

    // const url = qs.stringifyUrl({
    //   url: window.location.href,
    //   query,
    // }, { skipNull: true });

    const url = searchParams + `${brand}`

    router.push(url);
  }

  //  mình sẽ lấy ['size','Mall','face']
  return ( 
    <div className="mb-8">
  <h3 className="text-lg font-semibold">
    {/* {name} */}
  </h3>
  <hr className="my-4" />
  <div className="flex flex-wrap gap-2">
    {/* đổ dữ liệu  */}
    {brands.map((item, index) => (
         <div key={item} className="flex items-center">
           <Button
             className={cn(
              'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
               selectedValue === item && 'bg-black text-white'
             )}
             onClick={() => onClick(item)}
           >
             {item}
           </Button>
         </div>
       ))}
    
  </div>
</div>
  );
};

export default Filter;




// const arr: string[] = ['apple', 'banana', 'orange'];

// arr.forEach((item) => {
//   console.log(item);
// });

{/*  */}


//   {data.forEach((filter) => (
//       <div key={filter.id} className="flex items-center">
//         <Button
//           className={cn(
//             'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
//             selectedValue === filter.id && 'bg-black text-white'
//           )}
//           onClick={() => onClick(filter.id)}
//         >
//           {filter.name}
//         </Button>
//       </div>
//     ))}