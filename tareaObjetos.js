const libro = ( titulo, autor, anio, estado) =>({
    titulo, autor, anio, estado, descripcion(){
        console.log( `Libro titulado ${this.titulo} escrito por ${this.autor} en el año ${this.anio} Estado: ${this.estado}`);
    }
});

const L1 = libro("La metamorfosis", "Frank Kafka", 1915, "Disponible");
console.log("Titulo: " + L1.descripcion());

const L2 = libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605, "Ocupado");
console.log("Titulo: " + L2.descripcion());

const L3 = libro("Orgullo y prejuicio", "Jane Austen", 1813, "Ocupado");
console.log("Titulo: " + L3.descripcion());

const L4 = libro("Cien años de soledad", "Gabriel García Márquez", 1967, "Ocupado");
console.log("Titulo: " + L4.descripcion());

const L5 = libro("Frankenstein", "Mary Shelley", 1818, "Disponible");
console.log("Titulo: " + L5.descripcion());