// import { ProfileList } from "./components/profileList";
//import alias syntax -@/rootFolder/subFolder/subFolder/File
import { ProfileList } from "@/app/profile/components/profileList"
import { PROFILES } from "@/app/mock-data/profile"

export default function ProfilePage() {
    return <>
        <ProfileList profiles={PROFILES} />
    </>
}