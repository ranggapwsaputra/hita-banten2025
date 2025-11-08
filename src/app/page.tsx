import React from "react";
import Hero from "@/app/components/Home/Hero";
import Companies from "@/app/components/Home/Companies";
import History from "@/app/components/Home/History";
import Mentor from "@/app/components/Home/Mentor";
import Events from "@/app/components/Home/Events";
import Gallery from "@/app/components/Gallery";
// Import komponen Articles. Kita asumsikan path-nya benar
import Articles from "@/app/components/Home/Articles"; 

import { Metadata } from "next";
// Import fungsi Server-Side helper yang baru dibuat
import { getArticleMetadata } from "@/utils/articles"; 

export const metadata: Metadata = {
  title: "HITA Banten - Indonesia",
};

export default function Home() {
  // 1. Ambil data artikel dari file MDX (Server Side)
  const allArticles = getArticleMetadata();

  // 2. Filter / Ambil hanya 3 artikel terbaru untuk slider di halaman utama
  const latestArticles = allArticles.slice(0, 3); 

  return (
    <main>
      <Hero />
      <Companies />
      <History />
      <Mentor />
      <Events />
      <Gallery/>
      
      {/* 3. Kirim data yang telah diambil sebagai props ke komponen Articles */}
      <Articles articles={latestArticles} />
      
    </main>
  );
}