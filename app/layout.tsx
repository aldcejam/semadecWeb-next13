"use client"
import "./globals.css";

import { ThemeContextProvider } from '../src/contexts/ThemeContext'
import 'react-toastify/dist/ReactToastify.css';
import DefaultBackground from "../public/Default-background";
import { ToastContainer } from "react-toastify";
import { Rajdhani } from '@next/font/google';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html >
      <head></head >
      <body className={rajdhani.className}>
        <ThemeContextProvider>
          <DefaultBackground />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          {children}
        </ThemeContextProvider>
      </body>
    </html >
  )

}
