let express = require("express")
let app = express()

let rutasHeroes = require("./routes/heroes.js")
let rutasMain = require("./routes/main.js")

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

app.use("/heroes", rutasHeroes);
app.use("/", rutasMain);


// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!')
});

