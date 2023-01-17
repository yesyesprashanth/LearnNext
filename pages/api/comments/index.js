import {comments} from "../../../data/comments";

export default function handler(req,res){
    const method = req.method;   
    if(method === 'GET'){
        res.status(200).json(comments);
    }
    else if(method === 'POST'){
        const comment = req.body.comment;   
        console.log(comment);     
        const id = comments.length+1;
        const newComment = {
            id:id,
            comment:"hello world",
        }
        comments.push(newComment);
        res.status(201).json(newComment);
    }
}

