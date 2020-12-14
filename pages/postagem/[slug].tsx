import { GetServerSideProps } from 'next'
import { getPostData } from '../../lib/posts'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let { slug } = ctx.params
  if (slug instanceof Array) {
    slug = slug[0]
  }
  const postData = getPostData(slug)

  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <>
      <h1>O slug é: {postData.slug}</h1>
      <h2>O título é: {postData.title}</h2>
    </>
  )
}
