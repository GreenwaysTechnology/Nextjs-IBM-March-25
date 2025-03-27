import Image from "next/image"

export default function ImagePage(){
    return <div>
        {/* Local Image */}
         <Image src="/nature.png" height={500} width={500} alt="Nature Pic"></Image>
         {/* Remote Image */}
         <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" height={500} width={500} alt="Product Image"></Image>
    </div>
}