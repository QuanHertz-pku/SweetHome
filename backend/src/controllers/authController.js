const User = require('../models/User');
const authFunction = require('../functions/authFunction');

const debug = async (req, res) => {
    res.json(authFunction.reqSign(req));
}
// 登录控制器
const login = async (req, res) => {
    const reply = await authFunction.login(req.body.name,req.body.pwd);
    res.json(reply);
};

module.exports = { login,debug };