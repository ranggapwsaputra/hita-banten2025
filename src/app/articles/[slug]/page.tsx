import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPostSlugs } from '@/utils/mdx'
import Image from 'next/image'
import Link from 'next/link'

const components = { Image, Link }

interface PageProps {
  params: { slug: string }
}

/**
 * Generate static params untuk setiap artikel.
 */
export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

/**
 * Halaman artikel individual.
 */
export default async function ArticlePage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)
  if (!post) return notFound()

  const metadata = post.frontmatter as {
    title: string
    date: string
    author: string
    image?: string
    description?: string
    tags?: string[]
  }

  return (
    <main className="bg-gray-50 min-h-screen px-4 pt-32 pb-16">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-8 pb-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug mb-2">
            {metadata.title}
          </h1>

          <p className="text-sm text-gray-500 mb-4">
            {new Date(metadata.date).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            • <span className="font-medium text-gray-700">{metadata.author}</span>
          </p>

          {metadata.tags && metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {metadata.description && (
            <p className="italic text-gray-600">{metadata.description}</p>
          )}
        </div>

        {/* Banner */}
        {metadata.image && (
          <div className="relative w-full h-64 md:h-96 border-y border-gray-100">
            <Image
              src={metadata.image}
              alt={metadata.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        )}

        {/* Konten Artikel */}
        <div className="px-6 py-10 prose prose-slate prose-lg max-w-none leading-relaxed">
          <MDXRemote source={post.source} components={components} />
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 mt-6 py-6 px-6 flex justify-between items-center text-sm text-gray-500">
          <Link href="/articles" className="hover:underline text-primary">
            ← Kembali ke Daftar Artikel
          </Link>
          <span>© {new Date().getFullYear()} HITA Banten</span>
        </div>
      </article>
    </main>
  )
}

/**
 * Metadata untuk SEO.
 */
export async function generateMetadata({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Artikel Tidak Ditemukan' }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.frontmatter.title,
  }
}
