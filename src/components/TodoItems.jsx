import React from 'react'
import bluetick from '../assets/bluetick.png'
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = (props) => {
    const text=props.text;
    const date=props.date;
    const id=props.id;
    const isComplete=props.isComplete;
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>props.toggleTodo(id)} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isComplete?bluetick:not_tick} alt=""/>
            <p className={`text-slate-500 ml-4 text-[15px] decoration-slate-700 ${isComplete?'line-through':''}`}>{date}</p>
            <p className='ml-2 text-slate-500'>-</p>
            <p className={`text-slate-700 ml-2 text-[17px] decoration-slate-700 ${isComplete?'line-through':''}`}>{text}</p>
        </div>
        <img onClick={()=>props.deleteTodo(id)} className='w-3.5 cursor-pointer' src={delete_icon} alt=""/>
    </div>
  )
}

export default TodoItems