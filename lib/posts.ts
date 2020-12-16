import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'posts')

export interface PostFrontMatter {
  slug: string
  title: string
  date: string
}

export interface PostData extends PostFrontMatter {
  contentHtml: string
}

export function getSortedPostsData() {
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

export function getPostSlugs() {
  const fileNames = fs.readdirSync(postsDir)
  const slugs = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    return {
      slug
    }
  })

  return slugs
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDir,`${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const matterRes = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterRes.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    ...matterRes.data,
    contentHtml
  } as PostData
}
