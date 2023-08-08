import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Footer from '@/components/footer'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import ToastProvider from '@/providers/toast-provider'


const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Watch Store Online',
  description: 'Watch Store Online by create next app',
}
// const DynamicSidebarWithNoSSR = dynamic(() => import("../components/footer"), {
//   ssr: false,
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider></ToastProvider>
        <Navbar/>
        {children}
       {/* <DynamicSidebarWithNoSSR/> */}
        <Footer/>   
        </body>
    </html>
    
  )
}
