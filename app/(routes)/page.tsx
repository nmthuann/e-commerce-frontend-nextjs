import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import Footer from '@/components/footer'
import ProductList from '@/components/product-list';
import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container';
import Image from 'next/image'


// import dynamic from 'next/dynamic'
//const NoSSR = dynamic(() => import('../../../components/no-ssr'), { ssr: false })

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts();
  //const billboard = await getBillboard(1);
  // const billboard = await getBillboard('c0ac8a15-c72a-4da3-87b6-0c4b957d72fe');
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={undefined}     />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;

