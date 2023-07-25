const express = require('express')
const path = require ("path")

const app = express();

/* BLOQUE CAMBIADO
app.listen (3001,()=> console.log("servidor corriendo"))
app.use(express.static("public"))
*/
const port = process.env.PORT|| 3001;
app.lusten(port.at()=>console.log(`Servidor corriendo en el puerto ${port}`));

//const publicPath = path.resolve(__dirname, './public');// arma la ruta absoluta hasta la carpeta public
//app.use (express.static(publicPath));// hace que todo lo que haya en la carpeta public, sea un recurso static, para que pueda usarlo todo el tiempo



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

/*
link repositorio: https://github.com/AHillar/Mercado_Liebre.git
*/
