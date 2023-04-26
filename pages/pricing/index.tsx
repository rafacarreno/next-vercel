// import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

// const inter = Inter({ subsets: ['latin'] })

export default function PricingPage() {
  //Head es un componente, ya que comienza con mayuscula
  return (

    <MainLayout>     
        <h1>Pricing Page</h1>
        <h1 className={'title'}>
          Ir a <Link href='/'>Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing {':'}
          <code className={'code'}> pages/pricing/index.jsx</code>
        </p>

    </MainLayout>
  )
}
