import { TODOS } from "@/app/mock-data/todos"

export default async function TodosDetailsPage(props) {
    const todosId = (await props.params).id
    const todo = TODOS.find(todo => todo.id === parseInt(todosId))
    console.log(todo)
    return <section>
        <h2> {todosId} Details</h2>
        <section>
             <h2>{todo.title}</h2>
             <h3>Status: {todo.status ? "Done" : "In Progress"}</h3>
        </section>
    </section>
}