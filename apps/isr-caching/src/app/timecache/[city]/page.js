
//without cache
// export async function fetchCurrentDateAndTime() {
//     //api url to test whether the caching is enabled or not
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url)
//     const data = await response.json()
//     return data

// }

//with cache
// export async function fetchCurrentDateAndTime() {
//     //api url to test whether the caching is enabled or not
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url, { cache: 'force-cache' })
//     const data = await response.json()
//     return data

// }

// //clear the cache based on time.
// export async function fetchCurrentDateAndTime() {
//     //api url to test whether the caching is enabled or not
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url, { cache: 'force-cache', next: { revalidate: 2 } })
//     const data = await response.json()
//     return data

// }

// //clear the cache based on path : onDemand Revalidation
// export async function fetchCurrentDateAndTime() {
//     //api url to test whether the caching is enabled or not
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url, { cache: 'force-cache' })
//     const data = await response.json()
//     return data

// }

//clear the cache based on tag  : onDemand Revalidation
export async function fetchCurrentDateAndTime() {
    //api url to test whether the caching is enabled or not
    const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    const response = await fetch(url, { cache: 'force-cache', next: { tags: ['timerTag'] } })
    const data = await response.json()
    return data

}
export default async function TimeCache(props) {
    const data = await fetchCurrentDateAndTime()
    return <div>
        <h1>Caching App</h1>
        <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </div>
}

//SSG method

export async function generateStaticParams() {

    return [{
        city: 'Kolkata'
    }]
}