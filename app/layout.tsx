"use client"
import "./globals.css";

import { ThemeContextProvider } from '../src/contexts/ThemeContext'
import 'react-toastify/dist/ReactToastify.css';

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
          {children}
        </ThemeContextProvider>
      </body>
    </html >
  )

}
