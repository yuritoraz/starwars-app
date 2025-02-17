// app/layout.jsx
"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Julius_Sans_One, Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";

//components
import Header from "@/components/common/Header";
import Footer from '@/components/common/Footer';
import Menu from "@/components/common/Menu"

// instância do QueryClient
const queryClient = new QueryClient();

const inter = Inter({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-inter",
});

const juliusSansOne = Julius_Sans_One({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-julius-sans-one",
});

export default function RootLayout({ children }) {
  const [stars, setStars] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const totalStars = 500; // Define a quantidade de estrelas
    const generatedStars = Array.from({ length: totalStars }).map(() => ({
      x: Math.random() * 100, // Posição horizontal (0-100%)
      y: Math.random() * 100, // Posição vertical (0-100%)
      size: Math.random() * 2 + 1, // Tamanho (1-3px)
      delay: Math.random() * 5, // Atraso na animação (0-5s)
      duration: Math.random() * 3 + 2, // Duração da animação (2-5s)
    }));
    setStars(generatedStars);
  }, []);

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${juliusSansOne.variable}`}>
        <QueryClientProvider client={queryClient}>
          <Header />
          {pathname !== "/" && pathname !== "/sobre" && <Menu/>}
          {children}
        </QueryClientProvider>
        {/* Background com estrelas */}
        <div className="fixed inset-0 z-0 background-stars pointer-events-none">
          {stars.map((star, index) => (
            <div
              key={index}
              className="absolute bg-white rounded-full opacity-50"
              style={{
                top: `${star.y}%`,
                left: `${star.x}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `star ${star.duration}s infinite alternate`,
                animationDelay: `${star.delay}s`,
              }}
            ></div>
          ))}
        </div>
        <Footer />
      </body>
    </html>
  );
}