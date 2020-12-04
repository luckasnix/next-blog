import { GetStaticProps } from 'next'
import { getSortedPostsData, PostFrontMatter } from '../lib/posts'
import { Heading } from '@chakra-ui/core'
import styles from '../styles/home.module.scss'

export const getStaticProps: GetStaticProps = async () => {
  const sortedPostsData = getSortedPostsData()
  return {
    props: {
      sortedPostsData
    }
  }
}

export interface HomeProps {
  sortedPostsData: PostFrontMatter[]
}

export default function Home({ sortedPostsData }: HomeProps) {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Heading as="h1">Todas as postagens</Heading>
        <ul>
          {sortedPostsData.map(({ slug, title, date }) => (
            <li key={slug}>
              <Heading as="h2">{title}</Heading>
              <time>{date}</time>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
