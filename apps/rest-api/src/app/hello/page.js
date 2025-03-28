export async function fetchHello() {
    const url = 'http://localhost:3000/api/hello'
    const response = await fetch(url)
    return response.json()
}

export default async function HelloPage() {
    const hello = await fetchHello()
    return <div>
        <h1>{hello.message}</h1>
    </div>
}