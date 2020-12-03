import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'

export const getStaticProps: GetStaticProps = async () => {
  const sortedPostsData = getSortedPostsData()
  return {
    props: {
      sortedPostsData
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
