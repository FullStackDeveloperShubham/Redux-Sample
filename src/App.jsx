import './App.css'
import { useEffect, useState } from 'react'
// NOTE : use of redux 
import { useDispatch, useSelector } from 'react-redux'
// NOTE : import sclice
import { fetchedPost } from "./features/Blog/blogSlice.js"


function App() {
  const dispatch = useDispatch()

  const { posts, loading, error } = useSelector((state) => state.posts)
  console.log(posts)
  

  useEffect(() => {
    dispatch(fetchedPost())
  }, [dispatch])

  if (loading) return <div>Loaidng post ....</div>
  if (error) return <div>Error  {error}....</div>

  return (
    <>
      <div>
        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id} style={{
            margin: '20px 0',
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '5px'
          }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>Post ID: {post.id}</small>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
