import { redirect } from 'next/navigation';


import Navbar from '@/components/navbar'


export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
//   const { userId } = auth();

//   if (!userId) {
//     redirect('/sign-in');
//   }

//   const store = await prismadb.store.findFirst({ 
//     where: {
//       id: params.storeId,
//       userId,
//     }
//    });

//   if (!store) {
//     redirect('/');
//   };

    const token = localStorage.getItem('token');
    if (!token) {
        redirect('/auth/login');
    }

    return (
        <>
        <Navbar />
        {children}
        </>
    );
};