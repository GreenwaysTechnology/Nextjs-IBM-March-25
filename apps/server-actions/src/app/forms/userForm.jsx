'use client'

import { createUser } from "@/app/actions/userAction"

export default function CreateUser() {

    async function handleSubmit(event) {
        event.preventDefault()
        const data = {
            name: event.target.name.value,
            email: event.target.email.value
        }
        try {
            //submit the data to the server actions
            const result = await createUser(data)
            alert(`User Created: ${result.message}`)
        }
        catch (err) {
            alert(`Error : ${err.message}`)

        }
    }


    return <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-1">
            <div>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" placeholder="Name" required />
            </div>
            <div>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" name="email" placeholder="Email" required />
            </div>
            <div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">Create User</button>
            </div>
        </div>
    </form>
}