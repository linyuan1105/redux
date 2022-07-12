
import React, {useRef, useEffect} from "react";
import {useSelector} from "react-redux";
import './styles.css'

// canvas宽度
const width = 300
// canvas 高度
const height = 300
// 最小单位
const unit = 30
const unitNum = height/unit

function transfer({x,y}){
  return {
    x,
    y: unitNum-y +1
  }
}

export function MyCanvas() {
  const myCanvas = useRef(null)
  const posts = useSelector(state => state.posts)
  useEffect(()=>{
    const canvas = myCanvas.current
    if(!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,width,height)
    posts.map(post => {
      let {x,y} = transfer(post.position)
      x = x*unit
      y = y*unit
      // 左上
      const x1 = x-unit
      const y1 = y-unit
      // 左下
      const x2 = x-unit
      const y2 = y
      // 右上
      const x3 = x
      const y3 = y - unit
      // 右下
      const x4 = x
      const y4 = y
      // 绘画坐标点
      ctx.beginPath()
      ctx.moveTo(x1,y1)
      ctx.lineTo(x2,y2)
      ctx.lineTo(x4,y4)
      ctx.lineTo(x3,y3)
      ctx.closePath()
      ctx.fillText(`(${post.position.x},${post.position.y})`,x,y)
      ctx.fill()
    })
  },[posts.length])
  return (
    <div>
      <canvas ref={myCanvas} className='my-canvas' width={width} height={height}></canvas>
    </div>
  )
}
