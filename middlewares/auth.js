import jwt from 'jsonwebtoken';

const SECRET_KEY = 'jabidapsha123';

const authenticateToken = async (req, res, next) => {
  const authHeaders = req.headers.authorization;
 const token = authHeaders && authHeaders.split(' ')[1];
  
  if(!token){
    return res.status(401).json({
      message:'Access denied, token is required'
    })
  }

  jwt.verify(token, SECRET_KEY, (err, user)=>{
    if(err) res.status(401).json({
      message:"Token is invalid!"
    })
    req.user = user;
    next();
  })

}

export { authenticateToken };