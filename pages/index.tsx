import Link from 'next/link'
import { Button } from '@chakra-ui/core'
import Header from '../components/header'

export default function Home() {
  return (
    <>
      <Header/>
      <h1>Bem-vindo!</h1>
      <Link href="/sobre">
        <Button variantColor="teal">Sobre mim</Button>
      </Link>
    </>
  )
}
