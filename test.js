writeData = (data) => {
	  fs.writeFile(this.fileName, JSON.stringify(data), (err) => {
		if (err) throw err;
	  });
}

let producto1 = {
	title: "title",
	price: "price",
	thumbnail: "thumbnail",
	id: "id"
  }

const Contenedor = require('./Contenedor.js');

const productos = new Contenedor('./productos.txt');

const test =  () => {
	const data = productos.save( producto1 );
	console.log(data);
	const data2 = productos.getById(1);
	console.log(data2);
	const data3 = productos.getAll();
	console.log(data3);
      
	const deleteById = () => {
		const data = productos.getAll();
		const data2 = data.filter(obj => obj.id != 1);
		productos.writeData(data2);
		console.log(deleteById);
	}
	const deleteAll = () => {
		productos.writeData([]);
		console.log(deleteAll);
	}
}

test();