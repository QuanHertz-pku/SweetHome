const User = require('../models/User');

const getUser = async (name)=>{
    //console.log(name);
    const have = await User.findOne({name});
    return have;
};

module.exports = {getUser};