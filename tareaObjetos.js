const libro = ( titulo, autor, anio, estado) =>({
    titulo, autor, anio, estado, descripcion(){
        console.log( `Libro titulado ${this.titulo} escrito por ${this.autor} en el año ${this.anio} Estado: ${this.estado}`);
    }
});

const L1 = libro("La metamorfosis", "Frank Kafka", 1915, "Disponible");
console.log("Titulo: " + L1.descripcion());