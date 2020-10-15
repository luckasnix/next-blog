import Link from 'next/link'
import { Button } from '@chakra-ui/core'

export default function Home() {
  return (
    <>
      <h1>Bem-vindo!</h1>
      <Link href="/sobre">
        <Button variantColor="green">Sobre mim</Button>
      </Link>
    </>
  )
}
