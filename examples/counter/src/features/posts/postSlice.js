import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: '张三!',
    content: '张三!',
    name:'张三',
    position:{
      x: 2, y: 2
    }
  },
  {
    id: '2',
    title: '李四',
    content: '李四' ,
    name:'李四',
    position:{
      x: 1, y: 1
    }
  },
  {
    id: '3',
    title: '王五',
    content: '王五' ,
    name:'王五',
    position:{
      x: 1, y: 8
    }
  },
  {
    id: '4',
    title: '赵六',
    content: '赵六' ,
    name:'赵六',
    position:{
      x: 1, y: 10
    }
  },
  {
    id: '5',
    title: '天琦',
    content: '天琦' ,
    name:'天琦',
    position:{
      x: 2, y: 10
    }
  },
  {
    id: '6',
    title: '李威威',
    content: '李威威' ,
    name:'李威威',
    position:{
      x: 10, y: 10
    }
  }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state,action){
      state.unshift(action.payload)
    },
    postDelete(state, item) {
      state.map((post,index)=>{
        if(post.id === item.payload.id) {
          state.splice(index,1)
        }
      })
    }
  }
})

export const { postAdded, postDelete } = postsSlice.actions
export default postsSlice.reducer
