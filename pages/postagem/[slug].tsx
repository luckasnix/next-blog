import { GetServerSideProps } from 'next'
import { getPostData, PostData } from '../../lib/posts'
import Date from '../../components/date'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
    <>
      <h1>{postData.title}</h1>
      <Date dateString={postData.date}/>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
    </>
  )
}
