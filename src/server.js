import app from './app'; /* importando o this.app da classe app instanciada dentro do app.js */

const port = process.env.APP_PORT; // selecionando a porta a ser usada para executar o servidor
app.listen(port);
