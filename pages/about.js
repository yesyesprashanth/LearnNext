import Footer from '../components/Footer'
import style1 from '../styles/About.module.scss'
import style2 from '../styles/Contact.module.css'
import Head from 'next/head';
export default function About(){
    return<>
        <Head>
           <title>About Page Learning</title>
           <meta name="description" content="Learning Nextjs" />
        </Head>
        <h2>Hello World</h2>
        <p className = {style1.highlightscss}>Blue Color</p>
        <p className = {style2.highlight}>Red Color</p>
    </>
}

About.getLayout = function PageLayout(page){
    return(
        <>
            {page}
            <Footer />
        </>
    )
}