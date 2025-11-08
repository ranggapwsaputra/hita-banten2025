import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPostSlugs } from '@/utils/mdx'
import Image from 'next/image'
import Link from 'next/link'

const components = {
  Image,
  Link,
  Video: (props: React.VideoHTMLAttributes<HTMLVideoElement>) => (
    <video
      controls
      className="w-full rounded-xl shadow-md my-6"
      {...props}
    />
  ),
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
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
      {/* ============================ */}
      {/* Artikel Container */}
      {/* ============================ */}
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        
        {/* ---------- HEADER ---------- */}
        <div className="px-6 pt-8 pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-3">
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

          {/* ---------- TAGS ---------- */}
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

          {/* ---------- DESCRIPTION ---------- */}
          {metadata.description && (
            <p className="italic text-gray-600">{metadata.description}</p>
          )}
        </div>

        {/* ---------- IMAGE / BANNER ---------- */}
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

        {/* ---------- CONTENT ---------- */}
        <div
          className="
            px-6 py-10
            prose prose-slate prose-lg max-w-none
            leading-relaxed
            prose-headings:font-extrabold
            prose-headings:text-gray-900
            prose-h1:text-3xl prose-h1:mb-4
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-2
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-gray-900
            prose-em:text-gray-800
            prose-li:my-1 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal
            prose-a:text-primary prose-a:font-semibold hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-md
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:text-gray-600
          "
        >
          <MDXRemote source={post.content} components={components} />
        </div>

        {/* ---------- FOOTER ---------- */}
        <div className="border-t border-gray-200 mt-6 py-6 px-6 flex justify-between items-center text-sm text-gray-500">
          <Link
            href="/articles"
            className="hover:underline text-primary font-medium"
          >
            ← Kembali ke Daftar Artikel
          </Link>
          <span>© {new Date().getFullYear()} HITA Banten</span>
        </div>
      </article>
    </main>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Artikel Tidak Ditemukan' }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.frontmatter.title,
  }
}
