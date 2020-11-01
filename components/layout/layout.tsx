import Header from '../header'
import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
    </>
  )
}
