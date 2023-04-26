// import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

// const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  //Head es un componente, ya que comienza con mayuscula
  return (

    <>     
        <h1>About</h1>
        <h1 className={'title'}>
          {/* className={styles.title} */}
          Ir a <Link href='/'>Home</Link>
        </h1>

        <p className={'description'}>
          {/* className={styles.description} */}
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
          {/* className={styles.code} */}
        </p>

    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
