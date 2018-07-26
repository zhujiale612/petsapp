const mongoose = require("mongoose")


module.exports.addMember = async (member) => {

  const data = await mongoose
    .model("members")
    .create(member)
  return data
}
module.exports.getMemberPage = async ({ curPage, eachPage }) => {

  curPage = curPage * 1
  eachPage = eachPage * 1
  const membersModel = mongoose.model("members")
  let count = await membersModel.count()
  let data = await membersModel
    .find()
    .sort({
      _id: -1
    })
    .skip((curPage - 1) * eachPage)
    .limit(eachPage)
    .exec()
  return {
    curPage,
    eachPage,
    count: count,
    maxPage: Math.ceil(count / eachPage),
    member: data
  }
}

module.exports.clearMember = async ({ _id }) => {
  return await mongoose.model("members").findByIdAndRemove(_id);
}


//修改宠物
module.exports.determinepets = async (info) => {
  const data = await mongoose.model("members")
    .findOne({ _id: info.peopleid })
  for (let i = 0; i < data.pets.length; i++) {
    if (data.pets[i]._id == info.newdata._id) {
      data.pets.splice(i, 1, info.newdata)
    }
  }
  return await mongoose.model("members").update({ _id: info.peopleid }, { pets: data.pets })

}

//修改宠主
module.exports.modifyPeople = async (val) => {
 
 const {form}=val

return await mongoose.model("members").update({ _id:form._id},form )

}