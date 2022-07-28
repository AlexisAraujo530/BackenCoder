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
    partialsDir: __dirname + "/views/partials"
  })
);

app.set('view engine', 'hbs');
app.set('views','./views');
// app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('./products', router)
app.get('/', (req, res) => {
  res.render('main');
})
// Server conectado exitosamente
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// Server con error
server.on("error", (err) => {
  console.log( `El servidor a tenido un error:${error}`)
  `El servidor a tenido un error:${error}`
})
