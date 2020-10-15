import Link from 'next/link'
import { Button } from '@chakra-ui/core'

export default function About() {
  return (
    <>
      <h1>Sobre mim</h1>
      <Link href="/">
        <Button variantColor="green">Volta para a página inicial</Button>
      </Link>
    </>
  )
}
