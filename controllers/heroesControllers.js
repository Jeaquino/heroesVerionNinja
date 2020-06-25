const fs = require("fs")
const heroesconjunto = fs.readFileSync('./data/heroes.json', 'utf-8');

let heroesControllers = {
    heroes: JSON.parse(heroesconjunto),

    enviarHeroes: function(req,res){
       // let heroes = this.leerJSON();
        res.send(heroesControllers.heroes)	
    },
    // Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
    
    detalle: function (req,res)  {
        // Acá lo primero será encontrar al héroe que corresponda
        let id = req.params.id;
        //let heroes = this.leerJSON;
    
        heroesControllers.heroes.forEach(element => {
            if(element.id==id){
            res.send("Hola, mi nombre es " + element.nombre + " y soy " + element.profesion)
            }	
        })
        res.send("no encontrado")
            
        // Si se encuentra al héroe se envía el nombre y su profesión
        // Si NO se encuentra se envía el mensaje de no encontrado
    },

    bio: function(req,res) {
        // Acá lo primero será encontrar al héroe que corresponda
        let id = req.params.id
        let ok = req.params.ok
        //let heroes = this.leerJSON;
        heroesControllers.heroes.forEach(element => {
            if(element.id==id){
                if(ok == "ok"){
            res.send("Hola, mi nombre es " + element.nombre + " y soy " + element.profesion)
            }
            else{
                res.send("Lamento que no desees saber más de mi :(")
                }
            }	
        })
        res.send("No encontramos un héroe para mostrarte su biografía. Esto, indistintamente si se envió o no el parámetro")
    }
        // Si NO se encuentra al héroe se envía un mensaje
        // Si se encuentra al héroe:
            // Se pregunta si vino el parámetro Y el valor esperado y se envía la información
            // Si nó vino el parámetro se envía el mensaje de error
    

}

module.exports = heroesControllers