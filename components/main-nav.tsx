"use client"; 
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"
import Link from "next/link";
import { Category } from "@/types/category.interface";


interface MainNavProps {
  data: Category[]; //????
}

const MainNav: React.FC<MainNavProps> = ({
  data  
}) => {
    const pathname = usePathname();
    
    const routes = data.map((route) => ({
        href: `/category/${route.category_id}`,
        label: route.category_name,
        active: pathname === `/category/${route.category_id}`,
    }));


  return ( 
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
   );
};

export default MainNav;