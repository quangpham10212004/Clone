import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail(){
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3000/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [id]);
    if(!post) return <p>ko co post</p>
    return (
        <div>
            <h2>
                Chi tieet bai viet
            </h2>
            <p>{post.content}</p>
        </div>
    );
}