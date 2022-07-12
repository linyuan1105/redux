import {useState} from "react";
import {useDispatch} from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {postAdded} from "./postSlice";
import './styles.css'


export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [x,setPositionX] = useState(0)
  const [y,setPositionY] = useState(0)
  const dispatch = useDispatch()
  const onSavePostClicked = ()=>{
    if(title && content) {
      dispatch(postAdded(
        {
          id: nanoid(),
          title,
          content,
          position:{
            x,
            y
          }
        }
      ))
      setTitle('')
      setContent('')
      setPositionY(0)
      setPositionX(0)
    }
  }

  const onTitleChange = e => setTitle(e.target.value)
  const onContentChange = e => setContent(e.target.value)
  const onPositionXChange = e => setPositionX(e.target.value)
  const onPositionYChange = e => setPositionY(e.target.value)

  return (
    <section>
      （坐标输入数字1~10）
      <form className='post-add'>
        <label htmlFor='postTitle'>名称：</label>
        <input type='text' id='postTitle' name='postTitle' value={title} onChange={onTitleChange}/>
        <label htmlFor='postContent'>职业：</label>
        <textarea id='postContent' name='postContent' value={content} onChange={onContentChange}></textarea>
        <label htmlFor='positionX'>x坐标：</label>
        <textarea id='positionX' name='positionX' value={x} onChange={onPositionXChange}></textarea>
        <label htmlFor='positionY'>y坐标：</label>
        <textarea id='positionY' name='positionY' value={y} onChange={onPositionYChange}></textarea>
        <button  type='button' onClick={onSavePostClicked}>添加</button>

      </form>
    </section>
  )
}
