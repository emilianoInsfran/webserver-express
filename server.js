const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.render('home',{
        nombre:'Emilaino'
    });
});
app.get('/about', (req, res) =>{
    res.render('about',{
        nombre:'Emilaino'
    });
});

app.get('/data', (req, res) =>{
      res.send('salida de data');
  });

app.use( express.static( __dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales' );//con el __dirname le decimos que tome todo ese path y la concatene con la ruta que le vamos a definir
//extress hbs
app.set('view engine', 'hbs');

app.listen(port,()=>{
    console.log(`escuchando peticiones en el puerto  ${port}`);
});