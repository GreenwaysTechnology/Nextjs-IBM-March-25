import { Like } from "@/app/review/components/like";
import { Dislike } from "@/app/review/components/dislike";
import { MyClient } from "./components/MyClient";
import { MyServer } from "./components/MyServer";

export default function ReviewPage() {

    return <>
        <Like />
        <br />
        <Dislike />
        {/* Pass server component as Prop to child component */}
        <MyClient>
            {/* pass server as prop */}
            <MyServer />
        </MyClient>
    </>
}