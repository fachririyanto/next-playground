interface Todo {
    id: number
    title: string
    completed: boolean
}

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data: Todo[] = await res.json()

    return data
}

export default async function Page() {
    const data: Todo[] = await fetchData()

    return (
        <>
            <h1 className="font-semibold text-3xl">Hello world!!</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}