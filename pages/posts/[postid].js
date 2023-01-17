import {UseRouter} from 'next/router';

function Post({post}){

    return<>
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
    </>
}

export default Post;

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const paths = data.map(post=>{
        return {
            params :{
                postid: `${post.id}`,
            },
        }
    })

    return{
        paths:paths,
        fallback:false,
    }
}

export async function getStaticProps(context){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.postid}`);
    const data = await response.json();

    return{
        props:{
            post:data,
        },
    }
}