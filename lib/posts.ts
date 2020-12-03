import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export interface PostFrontMatter {
  slug: string
  title: string
  date: string
}

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDir)

  const postsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterRes = matter(fileContents)
    return {
      slug,
      ...matterRes.data
    } as PostFrontMatter
  })

  return postsData.sort((a, b) => {
    if(a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
