import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostDetail from './PostDetail';
function App() {

  return (
    <>
      <Router>
        <nav>
          <Link to = "/">Home</Link> | <Link to = "/posts">Posts</Link>
        </nav>
        <Routes>
          <Route path = "/posts" element = {<Posts/>}/>
          <Route path = "/posts/:id" element = {<PostDetail/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
