import Link from 'next/link'
import { Heading, Button } from '@chakra-ui/core'
import styles from '../styles/not-found.module.scss'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Heading as="h1">Página não encontrada</Heading>
        <Link href="/">
          <Button variantColor="teal">Voltar ao site</Button>
        </Link>
      </div>
    </div>
  )
}
