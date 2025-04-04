import Link from "next/link"

export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}

export const metadata = {
    title: "Todos Master",
    //add any meta data options
};


export default async function TodosMasterPage() {
    const todos = await fetchTodos()
    return <div>
        <ul>
            {
                todos.map(todo=>{
                    return <li key={todo.id}>
                        <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                    </li>
                })
            }
        </ul>
    </div>
}