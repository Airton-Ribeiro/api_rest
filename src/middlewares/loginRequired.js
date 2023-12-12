import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login Required'],
    });
  }
  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    // Metodo para caso o usuario mude email não deixar o token valido.
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    // Fazendo a checagem -> usuario vai ter que fazer novo token
    if (!user) {
      return res.status(401).json({
        errors: ['Usuario inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
