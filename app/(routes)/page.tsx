import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/ui/billboard';
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
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/tttn-donghoonline.appspot.com/o/black-friday-super-sale-facebook-cover-template_106176-1539.png?alt=media&token=f1533da4-80a8-449f-b258-e8d7c6f2db6e')" }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;

