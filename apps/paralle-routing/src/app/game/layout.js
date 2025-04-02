
export default function GameLayout(props) {
    return <div id="gamelayout">
        {/* Game Page Content */}
        {props.children}
        {/* Team Page Content */}
        {props.team}
        {/* Analytics Content */}
        {props.analytics}
    </div>
}