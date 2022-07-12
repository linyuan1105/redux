import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postDelete } from "./postSlice";
import './styles.css'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)
  const [currentPost, setCurrentPost] = useState(null)
  const dispatch = useDispatch()
  const onDeleteClicked = (post) => {
    if(post.id === currentPost?.id) {
      setCurrentPost(null)
    }
    dispatch(postDelete({
      ...post
    }))
  }
  const renderCurrentPost = () => {
    if(!currentPost) {
      return (
        <>
          点击可查看详情
        </>
      )
    }
    return (
      <>
        <p className="post-item"> 名称：{currentPost.title}</p>
        <p className="post-item">职业：{currentPost.content.substring(0, 100)}</p>
        <p className="post-item">x坐标:{currentPost.position.x} </p>
        <p className="post-item">y坐标:{currentPost.position.y} </p>
      </>
    )
  }
  const renderedPosts = posts.map(post => (
    <div className='post-excerpt'>
      <article  key={post.id} onClick={()=> setCurrentPost(post)}>
        <p className="post-item"> 名称：{post.title}</p>
      </article>
      <button onClick={() => onDeleteClicked(post)}>删除</button>
    </div>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderCurrentPost()}
      {renderedPosts}
    </section>
  )
}
