import { GetStaticProps } from 'next'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData, PostFrontMatter } from '../lib/posts'
import { Heading, Button } from '@chakra-ui/core'
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
              <Date dateString={date}/>
              <Link href="postagem/[slug]" as={`postagem/${slug}`}>
                <Button variantColor="teal">Ler mais</Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
