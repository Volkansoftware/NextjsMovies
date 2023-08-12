
import "@/styles/reset.css"
import "@/styles/global.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movies'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container">
        <Header/>
        <main>{children}</main>
        <Footer/>
        
        </body>
    </html>
  )
}
