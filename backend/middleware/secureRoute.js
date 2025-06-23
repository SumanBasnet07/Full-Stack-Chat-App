import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const secureRoute = async (req, res, next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(400).json({error:'No token, authorization denied'})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decoded.userId).select('-password')
        if(!user){
            return res.status(400).json({error:'No user found'})
        }
        req.user = user;
        next();
    } catch (error) {
            return res.status(400).json({error:'error in veryifing user'})
    }
}


export default secureRoute