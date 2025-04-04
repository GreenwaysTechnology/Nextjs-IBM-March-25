export async function fetchTodosByid(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}

//dymamic meta object 
export async function generateMetadata({ params, searchParam }, parent) {
    const id = (await params).id
    const todo = await fetchTodosByid(Number(id))
    //return meta object
    return {
        title: `${todo.title}`,
        description: `${todo.title} details`
    }
}

export default async function TodoDetailPage({ params }) {
    const id = (await params).id
    const todo = await fetchTodosByid(Number(id))
    return <div>
        <h2>id {todo.id}</h2>
        <p>title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
}