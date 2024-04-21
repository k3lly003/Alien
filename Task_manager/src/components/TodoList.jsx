import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

const TodoList = () => {
    const filteredTodos =  useSelector((state)=>{
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo)=>{
            const matchFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETED" && !todo.completed) || (filter === "ALL");
            const  matchSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchFilter && matchSearch;
        });
    });
    console.log("filter Todos", filteredTodos);
  return (
    <>
        <div>
            <ul>
                <li className="my-2 text-sm bold">All your list here...</li>
                {
                    filteredTodos.map((todo, index)=> (
                        <TodoItems key={index} todo={todo} index={index} />
                    ))
                }
            </ul>
        </div>
    </>
  )
}

export default TodoList