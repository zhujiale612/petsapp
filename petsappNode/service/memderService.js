
const { addMember, getMemberPage, clearMember, determinepets, modifyPeople } = require("../dao/memberDao.js")

module.exports.addMember = async (member) => {
  return await addMember(member)
}
module.exports.clearMember = async (id) => {
  return await clearMember(id)
}
module.exports.getMemberPage = async (curPage, eachPage) => {
  return await getMemberPage(curPage, eachPage)
}
module.exports.determinepets = async (info) => {
  return await determinepets(info)

}
//修改人
module.exports.modifyPeople = async (val) => {
  const data = await modifyPeople(val)
  if (data.ok) {
    return await getMemberPage(val.curPage, val.eachPage)
  }
}