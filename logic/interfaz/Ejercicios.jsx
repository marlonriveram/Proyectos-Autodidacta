import './ejercicios.css'
function Ejercicios({render}){
    const arr = [1,2,3,4,5]
    return(
        <main className="flex">
            <h1 className="titulo">Ejercicios logicos</h1>
            <section className="ejercicios flex">
                <h2>Seleccione el Ejercicios a Ver </h2>
                <div className="cards_eneunciados flex" id="cards_eneunciados">
                    {arr.map(render)}
                </div>
            </section>
        </main>
    )
};

export {Ejercicios}