import Link from 'next/link'
import { Image, Button } from '@chakra-ui/core'
import styles from './header.module.css'

const routes = [
  { path: '/', label: 'Início' },
  { path: '/sobre', label: 'Sobre' }
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div>
          <Image size="64px" src="https://via.placeholder.com/64" alt="Foto de perfil"/>
        </div>
        <nav>
          <ul>
            {routes.map(({ path, label }, idx) => (
              <li key={idx}>
                <Link href={path}>
                  <Button>{label}</Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
