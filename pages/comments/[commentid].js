export default function Comment({props}){
    return(
        <>
            <div>{props.id}</div>
            <div>{props.comments}</div>
        </>
    )
}

export function getStaticPaths(){   
   return{ 
    paths:[
       {params:{commentid:'1'}},
       {params:{commentid:'2'}},
       {params:{commentid:'3'}}
    ],
    fallback:false
   }
}

export async function getStaticProps(context){
    const response = await fetch(`/api/comments/${context.params.commentid}`);
    const data = await response.json();
    console.log(data);

    return{
        props:{
            comment:data,
        },
    }

}