import jwt from 'jsonwebtoken'
const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json({success: false, message: "1. Unauthorized"})
    
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
        if (error) return res.status(401).json({success: false, message: "2. Unauthorized"})
        req.user = decoded;
        console.log('t',req.user)

        next()
    })
}

export default verifyToken;