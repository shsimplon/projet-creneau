
function Button(props) {
    return (
        <button data-index= {props.i}className={props.size} onClick={props.handleClick}>{props.value}</button>
    )
}

export default Button;