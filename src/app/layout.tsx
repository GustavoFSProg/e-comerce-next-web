import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartContextProvider } from "@/data/contexts/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce de produtos digitais",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang= "pt-BR" >
    <body className={ inter.className }>
      <CartContextProvider>
      { children }
      </CartContextProvider>

      </body>
      </html>
  );
}
