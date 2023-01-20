import Head from 'next/head';
export default function Article(props){
    return<>
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="Blog world" />
        </Head>
        <h1>Article</h1>        
        <h3>{props.description}</h3>
    </>
}

export async function getServerSideProps(){

    return{
        props:{
            title:"Blog title",
            description:"Blog Description",
        },
    }
}