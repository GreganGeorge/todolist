import React, { useState } from 'react'
import bluetick from '../assets/bluetick.png'
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';
import { MdOutlineModeEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const TodoItems = (props) => {
    const text=props.text;
    const [newText,setNewText]=useState(text);
    const date=props.date;
    const id=props.id;
    const isComplete=props.isComplete;
    const updateTodo=props.updateTodo;
    const [isEditing,setIsEditing]=useState(false);
    const handleEdit=()=>{
      setIsEditing(true);
    }
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{if(!isEditing){props.toggleTodo(id)}}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isComplete?bluetick:not_tick} alt=""/>
            <p className={`text-slate-500 ml-4 text-[15px] decoration-slate-700 ${isComplete?'line-through':''}`}>{date}</p>
            <p className='ml-2 text-slate-500'>-</p>
            {!isEditing?<p className={`text-slate-700 ml-2 text-[17px] decoration-slate-700 ${isComplete?'line-through':''}`}>{newText}</p>:
            <input className='ml-2 bg-transparent border-b border-slate-700 outline-none text-slate-700 text-[17px]' value={newText}
            onChange={(e)=>setNewText(e.target.value)}/>}
        </div>
        {!isComplete && !isEditing?<MdOutlineModeEdit title='Edit' onClick={handleEdit} className='w-4 cursor-pointer'/>:
        !isComplete?<TiTick title='Save' onClick={()=>{setIsEditing(false),updateTodo(newText,id)}} className='w-4 h-7 cursor-pointer'/>:''}
        <img onClick={()=>props.deleteTodo(id)} className='w-3.5 cursor-pointer' title='Delete' src={delete_icon} alt=""/>
    </div>
  )
}

export default TodoItems