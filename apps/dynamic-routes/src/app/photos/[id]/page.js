
//make api call 
export async function fetchPhotosById(id) {
    try {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`
        const response = await fetch(url)
        const photo = await response.json()
        return photo
    }
    catch (err) {
        console.log(err)
    }
}

export default async function PhotosDetailsPage(props) {
    const id = (await props.params).id
    const photo = await fetchPhotosById(parseInt(id))
    return <div>
        <h1>{id} details</h1>
        <h2>AlbumId : {photo.albumId}</h2>
        <h2>{photo.title}</h2>

    </div>
}