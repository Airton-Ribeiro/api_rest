import multer from 'multer';
import multerConfig from '../config/multer';

import Picture from '../models/Picture'

const upload = multer(multerConfig).single('picture');

class PictureController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if(error){
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const picture = await Picture.create({ originalname, filename, aluno_id });

        return res.json(picture);
      } catch(e){
        return res.status(400).json({
          errors: ['Aluno não existe.']
        })
      }

    });
  }
}
export default new PictureController();
