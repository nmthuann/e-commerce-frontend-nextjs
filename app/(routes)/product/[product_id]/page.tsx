import ProductList from '@/components/product-list'
import Gallery from '@/components/gallery';
import Info from '@/components/information';
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Container from '@/components/ui/container';
import getProductsByCategoryId from '@/actions/get-products-by-categoryId';
import Information from '@/components/information';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    product_id: number;
  },
}

const ProductPage: React.FC<ProductPageProps> = async ({ 
  params
 }) => {
    const product = await getProduct(params.product_id);
    // const suggestedProducts = await getProducts();
  // const suggestedProducts = await getProductsByCategoryId({ 
  //   category_id: product?.__category__?.category_id
  // });
  const suggestedProducts = await getProductsByCategoryId(
      product?.__category__?.category_id
    );
  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            
            {/* Gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              
              {/* Information */}
              <Information data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>  
  )
}

export default ProductPage;