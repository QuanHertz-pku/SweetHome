const jwt = require('jsonwebtoken');
const authFunction = require('../functions/authFunction');
// 自定义中间件
const authToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // 获取 Bearer 后面的 token
    if (!token) return res.sendStatus(401); // 如果没有 token，返回401未授权
    // 验证 token
    const isDecoded = await authFunction.jwtVertify(token);
    if(!isDecoded){
        return res.sendStatus(403);
    }else{
        next();
    }
};

module.exports = {authToken}; // 导出中间件
