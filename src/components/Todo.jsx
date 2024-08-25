import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
    const [todoList,setTodoList]=useState(localStorage.getItem('todo_items')?JSON.parse(localStorage.getItem('todo_items')):[]);
    const inputRef=useRef();
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${date}/${month}/${year}`;
    }
    const add=()=>{
        const inputText=inputRef.current.value.trim();
        if (inputText===""){
            return null;
        }
        const newTodo={
            id:Date.now(),
            date:getDate(),
            text:inputText,
            isComplete:false,
        }
        setTodoList((prev)=>[...prev,newTodo]);
        inputRef.current.value="";
    }
    const deleteTodo=(id)=>{
        setTodoList((prev)=>{
            return prev.filter((todo)=>todo.id!==id)
        })
    }
    const toggleTodo=(id)=>{
        setTodoList((prev)=>{
            return prev.map((todo)=>{
                if(todo.id===id){
                    return {...todo,isComplete:!todo.isComplete}
                }
                return todo;
            })
        })
    }
    useEffect(()=>{
        localStorage.setItem("todo_items",JSON.stringify(todoList))
    },[todoList])
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col
    p-7 min-h-[550px] rounded-xl'>
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="todo_icon"/>
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none
            flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add your task'/>
            <button onClick={add} className='border-none rounded-full bg-blue-600 w-32
            h-14 text-white text-lg font-medium cursor-pointer hover:bg-blue-700 duration-200'>ADD</button>
        </div>
        <div>
            {todoList.map((item,index)=>{
                return <TodoItems key={index} id={item.id} isComplete={item.isComplete} text={item.text} 
                date={item.date} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            })}
        </div>
    </div>
  )
}

export default Todo