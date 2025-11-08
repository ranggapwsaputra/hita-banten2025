import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const photosDirectory = path.join(process.cwd(), 'public/images/gallery/funcamp/photos')
    const filenames = fs.readdirSync(photosDirectory)
    
    // Filter only .jpg files
    const photos = filenames.filter(file => 
      file.toLowerCase().endsWith('.jpg')
    )
    return NextResponse.json({ photos })
  } catch (error) {
    console.error('Error reading photos directory:', error)
    return NextResponse.json({ error: 'Failed to load photos' }, { status: 500 })
  }
}