const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(require('./routes'));

app.listen(3333);

/*(async () => {
    const database = require('./db');
    const Categoria = require('./models/categoria');
    const Material = require('./models/material');
    const Movimentacao = require('./models/movimentacao');
    const Profissional = require('./models/profissional');


    try {
       const resultado1 = await database.sync();
        console.log(resultado1);
        const resultado2 = await Categoria.sync();
        console.log(resultado2);
        const resultado3 = await Material.sync();
        console.log(resultado3);
        const resultado4 = await Movimentacao.sync();
        console.log(resultado4);
        const resultado5 = await Profissional.sync();
        console.log(resultado5);
    } catch (error) {
        console.log(error);
    }
})();*/
