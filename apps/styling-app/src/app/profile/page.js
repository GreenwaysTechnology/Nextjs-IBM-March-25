
import styles from './profile.module.css'

export function Profile({ name, bio }) {
    console.log(styles)
    return <div className={styles.profile}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.bio}>{bio}</p>
    </div>
}

export default function ProfilePage() {
    const profile = {
        name: 'Subramanian Murugan',
        bio: 'Next.js Trainer 1 | Microservices Consultant | Open Source Contributor'
    }
    return <>
        <h2>Profile Page</h2>
        <Profile name={profile.name} bio={profile.bio} s />

    </>
}