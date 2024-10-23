export const checkAdmin = async (req, res, next) => {
    try {
      const user = req.user
      if(user.role !== 'admin') res.status(403).json({ msg: 'Endpoint para usuarios administradores' })
      else next();
    } catch (error) {
      next(error)
    }
  };