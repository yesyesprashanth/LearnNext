import {comments} from "../../../data/comments";

export default function handler(req,res){
    const commentid = req.query.id;


    if(req.method==='GET'){
        const comment = comments.find(comment=>comment.id === parseInt(commentid));
        res.status(200).json(comment);
    } 
    else if(req.method === 'DELETE'){
        const deletedComment = comments.find(comment=>comment.id = commentid);

        const index = comments.findIndex(comment=>comment.id === parseInt(commentid))
        comments.splice(index,1);

        res.status(200).json(deletedComment);
    }
}