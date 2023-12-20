import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura",],
      order: [['id', 'DESC']],
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
        // Try catch para ajustar como apresenta os erros no insomnia
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno do not exist'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno do not exist'],
        });
      }
      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno do not exist'],
        });
      }
      const newAluno = await aluno.update(req.body);
      return res.json(newAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new AlunoController();
