import './ContainerSelectTip.css'
function ContainerSelectTip (props){
    return (
        <div className="container-selectTip">
            {props.children}
        </div>
    );
}

export {ContainerSelectTip}