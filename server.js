import app from './app'; /* importando o this.app da classe app instanciada dentro do app.js */

const port = 4200; // selecionando a porta a ser usada para executar o servidor
app.listen(port, () => {
  // pedindo para ouvir a porta e executar o servidor nela
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
