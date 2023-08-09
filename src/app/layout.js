"use client"
import './globals.css'
import { Inter ,Roboto } from 'next/font/google'
import Navbar from '@/component/navbar/Navbar'
import Footer from '@/component/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/component/AuthProvider/AuthProvider'
import { ToastContainer } from 'react-toastify';
import React, { useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <html lang="en">

      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
          <div className="container">
          <Navbar/> 
          {children}
          <ToastContainer/>
          <Footer/>
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
