import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDir)

  const postsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterRes = matter(fileContents)
    return {
      slug,
      ...matterRes.data
    }
  })

  return postsData
}
