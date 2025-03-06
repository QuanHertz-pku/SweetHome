const userServer = require('../servers/userServer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const reqSign = (req)=>{
    return {
        ...req.body,
        sign: "I Love the world. From SweetHome"
    }
}

const passwordTest = async (pwd1,pwd2) => {
    const res = await bcrypt.compare(pwd1,pwd2);
    return res;
}

const jwtVertify = async (token) => {
    try {
        const decoded = await jwt.verify(token, process.env.SECRET);
        if(!decoded.userId){
            return false;
        }else{
            return true;
        }
    } catch (error) {
        return false;
    }
}

const jwtSgin = async (userId) => {
    const token = await jwt.sign({ userId: userId }, process.env.SECRET, { expiresIn: '30d' }); // 替换 '你的密钥' 为实际密钥
    return token;
}

const login = async (name,pwd) => {
    const user = await userServer.getUser(name);
    if(!user){
        return {message : "用户名不存在"};
    }
    const isMatch = await passwordTest(pwd,user.pwd);
    if(!isMatch){
        return {message : "密码错误"};
    }
    const token = await jwtSgin(user.id);
    return { message: '登录成功', token };
}


module.exports = {reqSign,login,jwtVertify};