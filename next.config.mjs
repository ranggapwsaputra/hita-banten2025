import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tambahkan ekstensi .mdx ke pageExtensions agar Next.js meroutingnya
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  images: {
    unoptimized: true,
  },
  
  // Opsi eksperimental mdxRs dapat memberikan performa lebih baik,
  // tetapi ini opsional dan bisa dihapus jika menimbulkan masalah.
  // experimental: {
  //   mdxRs: true,
  // },
}

// Bungkus konfigurasi Next.js dengan fungsi nextMDX.
const withMDX = nextMDX({
  // Anda dapat menambahkan opsi MDX di sini jika diperlukan (misalnya remarkPlugins)
  options: {
    // Misalnya, untuk menonaktifkan fitur tertentu:
    // remarkPlugins: [],
    // rehypePlugins: [],
  },
})

export default withMDX(nextConfig);