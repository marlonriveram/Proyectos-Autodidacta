import './MainCalculadora.css'
function MainCalculadora (props){

    return(
        <main className="container-main-calculadora">
            {props.children}
        </main>
    );
};

export {MainCalculadora};