const express = require('express')
const router = require('../Routes/routes.js')
const app = express()
const PORT = 8080
const handlebars = require('express-handlebars')
const datos = require('./src/Products/products.js').listOfProducts()
//middleware
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    defaultLayout: "index",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "pug");
app.set("views engine", "ejs");
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/main');

// app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('./products', router)
app.get('/', (req, res) => {
  res.render('main');
});
app.get("./", (req, res) => {
  res.render("index", {
    title: "Bienvenido a la tienda",
    products: datos
  });
});
app.get('/',(req, res) => {
  res.render('views/index.ejs');
});
// Server conectado exitosamente
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// Server con error
server.on("error", (err) => {
  console.log( `El servidor a tenido un error:${error}`)
  `El servidor a tenido un error:${error}`
});
