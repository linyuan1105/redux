import React from 'react'
import {  PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
import { MyCanvas } from "./features/posts/canvas";
import './index.css'

function App() {
  return (
    <>
      <div className='container'>
        <AddPostForm></AddPostForm>
        <MyCanvas></MyCanvas>
      </div>
      <PostsList></PostsList>
    </>
  )
}

export default App
