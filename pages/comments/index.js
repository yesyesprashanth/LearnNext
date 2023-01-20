import { useState } from "react";
import { comments } from "../../data/comments";

export default function CommentsPage(){
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  async function fetchComments(){      
      const response = await fetch(`/api/comments`);
      const data = await response.json()
      setComments(pv=>data);
    }

  async function submitComment(){
    console.log(comment);
     const response = await fetch('/api/comments', {
      method:'POST',
      body:JSON.stringify({comment}),
      headers:{
        'Content-Type': 'application/json',
      },
     })

     const data = await response.json();
     console.log(data);
     fetchComments();
  }

   async function deleteComment(commentid){
    console.log(commentid);
    const response = await fetch(`/api/comments/${commentid}`, {
      method:'DELETE',
    })
    const data = await response.json();    
    console.log(data);
    fetchComments();
   }

  return(
    <>
    <input type='text' value ={comment} onChange={(e)=>setComment(pv=>e.target.value)} />
    <button onClick={submitComment}>Submit</button>
    <div>
    <button onClick = {fetchComments}>Load Comments</button>
    {
      comments.map(comment=>(
        <div key={comment.id}>
          <h1>{comment.text}</h1>
          <button onClick={()=>deleteComment(comment.id)}>Delete</button>
        </div>
      ))
    }
    </div>
    </>
  )
}