// import { Billboard } from "@/types/billboard.interface";

interface BillboardProps {
  data: any ; //Billboard
}
// data?.imageUrl
const Billboard: React.FC<BillboardProps> = ({
}) => {
  console
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
<div style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/tttn-donghoonline.appspot.com/o/black-friday-super-sale-facebook-cover-template_106176-1539.png?alt=media&token=f1533da4-80a8-449f-b258-e8d7c6f2db6e')" }}
      className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {/* {data.label} */} 
            {/* Explore watch clock */}
          </div>
        </div>
      </div>
    </div>
   );
};

export default Billboard;