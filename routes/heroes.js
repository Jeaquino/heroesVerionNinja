// Require de Express
let express = require ("express")
// Ejecución de Router Express
let router = express.Router()

let heroesControllers = require("../controllers/heroesControllers")

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/', heroesControllers.enviarHeroes)
	
// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get("/detalle/:id", heroesControllers.detalle) 

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/bio/:id/:ok?', heroesControllers.bio)

module.exports = router;
