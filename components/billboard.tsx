import { Billboard } from "@/types/billboard.interface";

interface BillboardProps {
  data: Billboard;
}
// data?.imageUrl
const Billboard: React.FC<BillboardProps> = ({
}) => {
  console
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `https://firebasestorage.googleapis.com/v0/b/tttn-donghoonline.appspot.com/o/4view1model.png?alt=media&token=0da7f948-c948-4985-a616-6eaeebc11936` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {/* {data.label} */} 
            Explore watch clock
          </div>
        </div>
      </div>
    </div>
   );
};

export default Billboard;