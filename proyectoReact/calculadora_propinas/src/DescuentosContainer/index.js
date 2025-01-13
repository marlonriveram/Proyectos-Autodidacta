import './DescuentosContainer.css'
function DescuentosContainer (props){
    return (
        <div className="container-descuentos">
            {props.children}
        </div>
    );

};

export {DescuentosContainer};