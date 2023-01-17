export default function NewsArticle({news}){
    return<>
        <h1>list of News Articles</h1>
        {
            news.map(article=>(
                <>
                    <h1 key={article.id}>{article.title}</h1>
                    <h2>{article.description}</h2>
                </>
            ))
        }
    </>
}

export async function getServerSideProps(context){
    const response = await fetch(`http://localhost:4000/news/${context.param}`);
    const data = await response.json();
    console.log(data);
    return{
        props:{
            news:data,
        },
    }
    

}