import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Posts(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data=> setPosts(data));
    }, []);

    return (
        <div>
            <h2>Danh sach post</h2>
            <ul>
                {posts.map(post=>(
                    <li key = {post.id}>
                        <Link to = {`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Posts;