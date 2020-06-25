let express = require ("express");
const mainControllers  = require("../controllers/mainControllers");
let router = express.Router()

// Ruta Raíz / ➝ Home
router.get('/', mainControllers.home)

// Ruta Créditos
router.get('/creditos', mainControllers.creditos)

module.exports = router;