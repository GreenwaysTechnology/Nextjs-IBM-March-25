import { TODOS } from "@/app/mock-data/todos"
import Link from "next/link"

export default function TodosPage() {
    
    return <div>
        <h1>Todos Master Page</h1>
        <ul>
            {TODOS.map(todo => {
                return <li key={todo.id}>
                    <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                </li>
            })}
        </ul>
    </div>
}