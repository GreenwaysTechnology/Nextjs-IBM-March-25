import photos from "@/app/mock-data/photo"
import Frame from "@/app/components/Frame"
import Modal from "@/app/components/Modal"

export default async function PhotoModal({ params }) {
    const id = (await params).id
    console.log(id)
    const photo = photos.find((p) => p.id == id)
    console.log(photo)
    return (
        <Modal>
            <Frame photo={photo} />
             <h1>Hello</h1>
        </Modal>
    )
}