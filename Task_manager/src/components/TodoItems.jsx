

const todoItems = ({todo, index}) => {
  return (
    <>
        <li>
            <div>
                <span>{index + 1}</span>
                <span>{todo.text}</span>
            </div>
        </li>
    </>
  )
}

export default todoItems