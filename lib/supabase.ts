import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export const getImageUrl = (imageName: string) => {
  if (!imageName) return null
  
  // If it's an external URL (starts with http:// or https://), return it as is
  if (imageName.startsWith('http://') || imageName.startsWith('https://')) {
    return imageName
  }
  
  // Clean the filename and ensure proper extension
  let path = imageName.replace(/^\/+/, '') // Just remove leading slashes
  if (!/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(path)) {
    path = `${path}.webp`
  }
  
  return `${supabaseUrl}/storage/v1/object/public/projects/${path}`
}

