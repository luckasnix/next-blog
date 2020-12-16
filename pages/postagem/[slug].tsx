import { GetStaticProps, GetStaticPaths } from 'next'
import { getPostData, getPostSlugs, PostData } from '../../lib/posts'
import Date from '../../components/date'
import { Heading } from '@chakra-ui/core'
import styles from '../../styles/post.module.scss'

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs()
  const paths = slugs.map(({ slug }) => ({
    params: {
      slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  let { slug } = ctx.params
  if (slug instanceof Array) {
    slug = slug[0]
  }
  const postData = await getPostData(slug)

  return {
    props: {
      postData
    }
  }
}

export interface PostProps {
  postData: PostData
}

export default function Post({ postData }: PostProps) {
  return (
    <div className={styles.page}>
      <article className={styles.container}>
        <Heading as="h1">{postData.title}</Heading>
        <Date dateString={postData.date}/>
        <div className={styles.contentHtml} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
      </article>
    </div>
  )
}
