let { getuser, register ,Land} = require('../dao/usersDao.js')

module.exports.getuser = async (users) => {
    return await getuser(users)
};

// module.exports.adduser = async (usersInfo) => {
//     return await adduser(usersInfo)
// };
module.exports.register = async (data) => {
    return await register(data)
}

module.exports.Land = async (data) => {
    return await Land(data)
}