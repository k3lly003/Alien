import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import {useDispatch} from "react-redux"
import {addTodo} from "../redux/actions"

const Todo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState([]);

  const handleTask=(text)=>{
    dispatch(addTodo(text));
  };

  const handleTaskByClick = () => {
      if(task.trim !==""){
        handleTask(task.trim());
        setTask("")
      }
  }

  return (
    <>
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
          <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Task Manager</h2>
          <div className="flex items-center mb-4">
            <input value={task} type="text" name="addTaskInput" onChange={(e)=>setTask(e.target.value)} id="addTaskInput" placeholder="add a task" className="flex-grow p-2 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500"/>
            <button onClick={handleTaskByClick} className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-500 focus:outline-none"><FaPlus /></button>
          </div>
        </div>
    </>
  )
} 

export default Todo