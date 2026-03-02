let frutas = ["mango", "melon", "mango", "fresa", "frambuesa", "jicama", "jicama", "fresa", "arandano",
    "mora", "arandano", "cereza", "melon", "manzana", "frambuesa", "jicama", "arandano", "manzana", "frambuesa", "fresa", "arandano"];

const contadorFrutas = {
    mango: 0,
    fresa: 0,
    frambuesa: 0,
    mora: 0,
    cereza: 0,
    melon: 0,
    manzana: 0,
    jicama: 0,
    arandano: 0
};

const arrayPropiedades = Object.keys(contadorFrutas);

for(let i = 0; i < frutas.length; i++){
    for(let j = 0; j < arrayPropiedades.length; j++){
        if(frutas[i] === arrayPropiedades[j]){
            contadorFrutas[arrayPropiedades[j]] += 1;
        }
    }
}

for(let i = 0; i < arrayPropiedades.length; i++){
    console.log(arrayPropiedades[i] + ": " + contadorFrutas[arrayPropiedades[i]]);
}


