import {comments} from '../../../data/comments'

export default function(req,res){
    const commentid = req.query.commentid;
    if(req.method === 'GET'){
        const comment = comments.find(comment=>comment.id===parseInt(commentid));
        res.status(200).json(comment);
    }
    if(req.method = "Delete"){
        const index = comments.findIndex(comment=>comment.id===parseInt(commentid));
        console.log(comments[0].id, index, commentid, req.query.commentid);
        comments.splice(index,1);
    }
    res.status(200).json(comments);
}