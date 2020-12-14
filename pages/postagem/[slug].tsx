import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let { slug } = ctx.params
  if (slug instanceof Array) {
    slug = slug[0]
  }
  
  return {
    props: {
      slug
    }
  }
}

export default function Post({ slug }) {
  return (
    <h1>O slug é: {slug}</h1>
  )
}
