import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express'; /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import homeRoutes from './src/routes/home';
import userRoutes from './src/routes/user';
import tokenRoutes from './src/routes/token';
import alunoRoutes from './src/routes/aluno';
import pictureRoutes from './src/routes/picture';

class App { // criando uma classe para exportar o necessario para o servidor
  constructor() {
    // construtor onde serão executados todos os metodos quando a classe for instanciada
    this.app = express(); // instanciando o express no .app
    this.middlewares(); // metodo middlewares
    this.routes(); // metodo routes
  }

  middlewares() { // middlewar para executar pelo construtor
    this.app.use(express.urlencoded({ extended: true }));
    /* Este middleware acima é responsável por analisar os dados
     enviados pelo cliente através de formulários HTML */
    this.app.use(express.json());
    // Este middleware acima é responsável por analisar o corpo de solicitações com formato JSON.
  }

  routes() {
    this.app.use('/', homeRoutes); // rota para a pagina home
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/picture/', pictureRoutes);
  }
}

export default new App().app; // exportando o this.app (express)
