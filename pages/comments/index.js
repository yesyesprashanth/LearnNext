import { useState } from "react";
export default function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  async function getComments() {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
    console.log(data);
  }

  async function submitComment(){
    console.log(comment);
        const response = await fetch('/api/comments', {            
            method:'POST',
            body:JSON.stringify({comment}),
            header :{
                'content-type': 'application/json',
            }            
        })
        const data = await response.json();
        console.log(data);
    }

async function deleteComment(commentid){
    const response = await fetch(`/api/comments/${commentid}`, {
        method:"DELETE"
    })

    const data = await response.json();
    getComments();
}

  return (
    <>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h1>{comment.text}</h1>
          <button onClick={()=>deleteComment(comment.id)}>delete</button>
        </div>
      ))}

      <button onClick={getComments}>get Comments</button>
      <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit</button>
      </div>

    </>
  );
}
