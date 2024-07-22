// const sessionUserToMap = new Map();

// using jwt
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'jabidapsha123'
const setUser = (user)=>{
    // jwt authentication
    return jwt.sign({
        id:user.id,
        email:user.email
    },SECRET_KEY);
    
}

const getUser = (token) =>{
    if(!token) return null;
   return jwt.verify(token, SECRET_KEY);
}

export {setUser, getUser};