export default function ArticleList({articles, category}){
    return<>
            <h1>The news list of {category}</h1>
        {
            articles.map(article=>(
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <h3>{article.description}</h3>
                    <hr />
                </div>
            ))
        }
    </>
}

export async function getServerSideProps(context){
    const {params, req, res, query} = context;
    console.log(query);
    res.setHeader('set-cookie', ['name=Prashanth']);
    const {category} = params;
    const response = await fetch(`http:localhost:4000/news?category=${category}`);
    const data = await response.json();

    return{
        props:{
            articles:data,
            category        },
    }
}