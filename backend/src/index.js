const express = require('express');
const cors = require('cors');
const routes = require('./routes'); 


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/*
métodos HTTP

Get: Buscar uma informação do back-end
Post: sempre que quiser criar uma informção no back-end
Put: para alterar uma alteração no back-end
Delete: Para deletar uma informação no back-end
*/

/* 
Tipos de Parâmetros

Query Params: Parâmetros nomeados enviado na rota após o "?" (filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*/

/*
Driver: SELECT * From Users
Query Builder: table('users').select('*').where()


*/




