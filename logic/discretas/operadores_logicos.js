// conjuncion opedor Y (AND)

function conjuncion (a,b){
    console.log(a && b);
    return a && b;
};

conjuncion(false,true);
conjuncion(true,false);
conjuncion(false,true);
conjuncion(false,false);

// Disyuncion (OR)

function disyuncion (a,b) {
    console.log(a || b);
};


disyuncion(true,true);
disyuncion(true,false);
disyuncion(false,true);
disyuncion(false,false);

// Negacion (NOT)

function negacion (a) {
    console.log(!a)
};

negacion(true);
negacion(false);

// Disyuncio Exclusica ( O Excluiva XOR) se puede dar una u otrapero no las dos a la vez

function disyuncionExclusiva (a,b) {
    console.log((a || b) && !(a && b))
    
};

disyuncionExclusiva(true,true);
disyuncionExclusiva(true,false);
disyuncionExclusiva(false,true);
disyuncionExclusiva(false,false);


// Negacion de la Conjuncion (Y NEGADA NAND)

function conjuncionNegada (a,b){
    console.log(!(a && b))
}

conjuncionNegada(true,true);
conjuncionNegada(true,false);
conjuncionNegada(false,true);
conjuncionNegada(false,false);

// Negacion de la Disyuncion (O negado NOR)

function disyuncionNegada (a,b) {
    console.log(!(a || b));
};


disyuncionNegada(true,true);
disyuncionNegada(true,false);
disyuncionNegada(false,true);
disyuncionNegada(false,false);

// Negacion de las disyuncionExclusiva NXOR
function disyuncionExclusivaNegada (a,b) {
    console.log(!((a || b) && !(a && b)))
    // FORMA MAS OPTIMA
    console.log((a && b) || (!a && !b))
};

disyuncionExclusivaNegada(true,true);
disyuncionExclusivaNegada(true,false);
disyuncionExclusivaNegada(false,true);
disyuncionExclusivaNegada(false,false);


let A = true;
let B = true;
console.log(!A || B); // 