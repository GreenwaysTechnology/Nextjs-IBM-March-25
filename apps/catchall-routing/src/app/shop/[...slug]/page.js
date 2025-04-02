export default async function ShopDetailPage({ params }) {
    const myparms = (await params)
    console.log(myparms)

    return <div>
        <h1>Shop Detail Page {JSON.stringify(myparms)}</h1>
    </div>
}