export default function PanelLayout(props) {
    const isAdmin = false
    return <div>
        {/* Panel Page Content */}
        {props.children}
        {/* Either Admin or User Panel */}
        {isAdmin ? props.AdminPanel : props.UserPanel}
    </div>
}