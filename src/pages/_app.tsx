import { ThemeProvider } from '@material-tailwind/react'
import type { AppProps } from 'next/app'
import NavbarPersonalizada from '../components/NavbarPersonalizada'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NavbarPersonalizada></NavbarPersonalizada>
      <Component {...pageProps} />
    </ThemeProvider>

  )
}
