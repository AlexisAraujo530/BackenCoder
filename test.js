
const Contenedor = require('./Contenedor.js');

const productos = new Contenedor('productos.txt');

const test =  () => {
	const data = productos.save({ name: "name", lastName: "last name" });
	console.log(data);
}

test();