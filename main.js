class Usuario{
 
    constructor(nombre,apellido,libros = [],mascotas=[]){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
 
    getFullName(){
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}`)
 
    } 
 
    addMascota() {
        this.mascotas.push()
    }
 
    countMascotas(){
       console.log(this.mascotas.length)
    }
 
    addBook(){
        this.libros.push({nombre: nombre, autor: autor})
    }
 
    getBookNames(){
      const newArray= this.libros.map(element => element.nombre);
        console.log(newArray);
    }
 
}

const usuario = new Usuario ('Alexis','Araujo')
    console.log()

    
usuario.libros=[{nombre: "HarryPoter", autor: "Pedro"},{nombre: "Troya", autor: "Aquiles"}];
usuario.mascotas=["perro","gato", "loro"];
usuario.getFullName();
usuario.countMascotas();
usuario.getBookNames();