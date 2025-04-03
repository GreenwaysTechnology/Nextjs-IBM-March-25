
export async function fetchTodosByid(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}

export default async function TodoDetailPage(props) {
    const todo = await fetchTodosByid(Number(props.params.id))
    return <div>
        <h2>id {todo.id}</h2>
        <p>title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
}
export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}
//this function only will be called during build time , that means when you run npm run build
export async function generateStaticParams() {
    //the code will help to generate html pages 
    const todos = await fetchTodos()
    //return array
    return todos.map(todo => {
        //return object having field, fieldName is name of the html file
        let id = todo.id.toString()
        return {
            id: id
        }
    })

}
