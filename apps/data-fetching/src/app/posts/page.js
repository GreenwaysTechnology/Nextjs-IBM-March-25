// import FetchPost from "@/app/posts/components/FetchPost";
import FetchPostUsingSWR from "@/app/posts/components/FetchPostUsingSWR";

export default function PostPage() {
    return <div>
        {/* <FetchPost /> */}
        <FetchPostUsingSWR />
    </div>
}