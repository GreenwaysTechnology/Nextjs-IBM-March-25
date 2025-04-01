
export async function fetchUsers() {
    const url = process.env.USERS_URL
    const response = await fetch(url)
    const users = await response.json()
    return users
}

export default async function UsersPage() {
    const users = await fetchUsers()
    return <>
        <div>
            {users.map(user => {
                return <section key={user.id}>
                    <h2>{user.id}</h2>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.role}</p>
                </section>
            })}
        </div>
    </>

}