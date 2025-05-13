import express from 'express';
const app = express();
import cors from "cors";
app.use(cors());

const posts = [
    { id: 1, title: 'Bài viết số 1', content: 'content 1' },
    { id: 2, title: 'Bài viết số 2', content: 'content 2' },
    { id: 3, title: 'Bài viết số 3', content: 'content 3' },
];

app.get('/posts', (req, res) =>{
    try{
        res.json(posts);
    }catch(err){
        res.status(404).json(err);
    }
});

app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (post) res.json(post);
  else res.status(404).json({ error: 'Post not found' });
});

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});