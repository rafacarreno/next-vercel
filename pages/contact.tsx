// import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

// const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  //Head es un componente, ya que comienza con mayuscula
  return (

    <MainLayout>
      <h1>Contact</h1>
      <h1 className={'title'}>
        {/* className={styles.title} */}
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className={'description'}>
        {/* className={styles.description} */}
        Get started by editing{' '}
        <code className={'code'}>pages/contact.jsx</code>
        {/* className={styles.code} */}
      </p>
    </MainLayout>

  )
}
