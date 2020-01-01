const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Conten-Type':'aplication/json'});
    let salida = {
        nombre:'emiliano',
        edad:27,
        url:req.url
    }
    
    //res.write('Hola mundo');
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

/*Un midelware es una instrucción o un callback que se va a ejecutar siempre, no importa que url la persona
pida  */

console.log('escuchando el puerto 8080');