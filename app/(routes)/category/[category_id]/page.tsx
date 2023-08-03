
import Container from '@/components/ui/container';

import ProductCard from '@/components/ui/product-card';


import getProducts from "@/actions/get-products";
import getCategory from '@/actions/get-category';

import Filter from './components/filter-brand';
import MobileFilters from './components/mobile-filters';

import getProductsByCategoryId from '@/actions/get-products-by-categoryId';
import getProductBrandsByCategoryId from '@/actions/get-product-brand';
import Billboard from '@/components/ui/billboard';
import NoResults from '@/components/ui/no-result';
import { PriceSelector } from './components/price-selector';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    category_id: number;
  }
  // query: {
  //   brand: string;
  //   price: number;
  // }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ 
  // category_id
  params, 
  // query
}) => {
  const products = await getProductsByCategoryId(params.category_id);
  //const brands = await getProductBrandsByCategoryId(params.category_id);
  const category = await getCategory(params.category_id);

  return (
     <div className="bg-white">
      <Container>
        <Billboard data={category} />
        {/* <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters brands={brands} />
            <div className="hidden lg:block">
              <Filter 
                brands={brands}
              />
              <PriceSelector defaultValue={[]}/>
            </div> 
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.product_id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div> */}
        <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.product_id} data={item} />
                ))}
              </div>
            </div>
      </Container>
    </div>
  );
};

export default CategoryPage;