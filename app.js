const express = require('express')
const path = require ("path")

const app = express();

/* BLOQUE CAMBIADO
app.listen (3001,()=> console.log("servidor corriendo"))
app.use(express.static("public"))
*/

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
  })

//const publicPath = path.resolve(__dirname, './public');// arma la ruta absoluta hasta la carpeta public
//app.use (express.static(publicPath));// hace que todo lo que haya en la carpeta public, sea un recurso static, para que pueda usarlo todo el tiempo



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

/*
link repositorio: https://github.com/AHillar/Mercado_Liebre.git
*/
