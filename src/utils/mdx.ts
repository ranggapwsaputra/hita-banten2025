import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

// Definisikan path ke folder artikel Anda
const ARTICLES_PATH = path.join(process.cwd(), 'public', 'articles');

/**
 * Mendapatkan semua slug (nama file tanpa ekstensi) dari folder artikel.
 */
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(ARTICLES_PATH);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

/**
 * Mengambil konten MDX lengkap dan mengembalikannya dalam bentuk serial (siap render).
 */
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(ARTICLES_PATH, `${slug}.mdx`);
  
  // Pastikan file ada sebelum mencoba membacanya
  if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`);
      return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Pisahkan metadata (frontmatter) dan konten
  const { data, content } = matter(fileContents);

  // Serialisasi konten MDX untuk di render
  // 'scope' adalah metadata (data frontmatter) yang akan disuntikkan ke konteks MDX
  const mdxSource = await serialize(content, { scope: data });

  return {
    source: mdxSource,
    frontmatter: data,
    content,
  };
}