
//react code to display profile information
export function ProfileList(props) {
    // const profiles = PROFILES
    return <>
        <h2>Profile List</h2>
        <div>
            {
                props.profiles.map(profile => {
                    return <section key={profile.id}>
                        <p>{profile.name} {profile.email}</p>
                    </section>
                })
            }
        </div>
    </>

}