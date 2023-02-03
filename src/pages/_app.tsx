import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <div className='text-center'>
      <p>It is aowfull for me.</p>
    </div>
    <div>
    <Component {...pageProps} />
    </div>
    </div>
}
