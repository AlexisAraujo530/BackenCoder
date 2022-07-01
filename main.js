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
        const newmascota=this.mascotas.push()
        console.log(newmascota)
    }
 
    countMascotas(){
       console.log(this.mascotas.length)
    }
 
    addBook(){
        const addlibro = this.libros.push({nombre: nombre, autor: autor})
        console.log(addlibro)
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