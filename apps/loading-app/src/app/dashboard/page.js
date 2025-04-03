import React, { Suspense } from 'react'

const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, import('../components/greeter'))
    })
})
const Greeter = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})
//The Welcome component is loaded within Suspense context
// export default function DashboardPage() {
//      return <Welcome/>
// }

//The portion of the page is loaded using suspense
export default function DashboardPage() {
    return <>
        <div>
            {/* Static content */}
            <h1>This is static content</h1>
        </div>
        {/* show the welcome component after 8000 ms -dynamic content */}
        <Suspense fallback={<h1>Welcome is Loading...</h1>}>
            <Welcome />
        </Suspense>
        <div>
            <h2>This is also static content</h2>
        </div>
        <Suspense fallback={<h1>Greeter is Loading...</h1>}>
            <Greeter />
        </Suspense>

    </>
}