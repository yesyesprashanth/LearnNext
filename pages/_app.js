import '../styles/globals.css';
import {ThemeProvider} from 'styled-components';
import Header from '../components/header';
import Footer from '../components/Footer';
import Head from 'next/head'

const theme = {
  colors:{
    primary:'#355C70'
  }
}

export default function App({ Component, pageProps }) {
   if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />);
   }
  return(
    <ThemeProvider theme={theme}>
      <Head>
        <title>Hello WOrld</title>
      </Head>
      <Header />      
        <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}
