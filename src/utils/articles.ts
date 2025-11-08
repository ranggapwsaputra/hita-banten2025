// lib/articles.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Definisikan tipe untuk metadata artikel yang akan Anda ekstrak
export type ArticleMetadata = {
  title: string;
  date: string;
  excerpt: string; // Deskripsi singkat
  slug: string; // Nama file tanpa ekstensi
  author: string;
  image: string; // Path gambar, jika ada di Frontmatter
};

// Tentukan path ke folder MDX Anda (di mana 'artikel-pertama-saya.mdx' berada)
const ARTICLES_PATH = path.join(process.cwd(), 'public', 'articles');

export function getArticleMetadata(): ArticleMetadata[] {
  // 1. Dapatkan semua nama file di direktori
  const fileNames = fs.readdirSync(ARTICLES_PATH);

  // 2. Filter hanya file .mdx
  const mdxFiles = fileNames.filter((fileName) => fileName.endsWith('.mdx'));

  // 3. Iterasi melalui setiap file untuk mengekstrak metadata (Frontmatter)
  const articles = mdxFiles.map((fileName) => {
    // Membaca konten file
    const fullPath = path.join(ARTICLES_PATH, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Menggunakan gray-matter untuk memisahkan Frontmatter dan konten
    const { data } = matter(fileContents);

    // Membuat slug dari nama file (menghilangkan ekstensi .mdx)
    const slug = fileName.replace(/\.mdx$/, '');

    // Mengembalikan objek ArticleMetadata
    return {
      ...(data as Omit<ArticleMetadata, 'slug'>), // Asumsikan data Frontmatter cocok dengan ArticleMetadata
      slug,
    } as ArticleMetadata;
  });

  // 4. Urutkan artikel (misalnya, berdasarkan tanggal terbaru)
  articles.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return articles;
}