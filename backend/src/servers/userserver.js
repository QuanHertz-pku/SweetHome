const User = require('../models/User');


//通过名字获得用户
const getUser = async (name)=>{
    const have = await User.findOne({name});
    return have;
};

module.exports = {getUser};