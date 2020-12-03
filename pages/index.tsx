import { GetStaticProps } from 'next'
import { getPostsData } from '../lib/posts'

export const getStaticProps: GetStaticProps = async () => {
  const postsData = getPostsData()
  console.log(postsData)
  return {
    props: {
      postsData
    }
  }
}

export default function Home() {
  return (
    <>
      <h1>Bem-vindo!</h1>
    </>
  )
}
