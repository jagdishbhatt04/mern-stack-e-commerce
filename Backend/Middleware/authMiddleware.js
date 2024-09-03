const JWT_SECRET = 'jais@123';
import jwt from 'jsonwebtoken';
// create token here
const createToken = (tokenData)=>{
    return jwt.sign({tokenData},JWT_SECRET , {expiresIn:'1h'})
}

// tokenVerify here 
const authMiddleware = async (req, res, next) => {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.jwtData = data;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

export {authMiddleware , createToken}