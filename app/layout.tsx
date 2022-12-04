"use client"
import "./globals.css";

import { ThemeContextProvider } from '../src/contexts/ThemeContext'
import 'react-toastify/dist/ReactToastify.css';
import DefaultBackground from "../public/Default-background.tsx/Index";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    < html >
      <head></head >
      <body>
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
