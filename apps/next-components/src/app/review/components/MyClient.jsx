
export function MyClient(props) {

    return <>
        <h1>Client renders Server without Loosing Server Rendering</h1>
        {props.children}
    </>
}