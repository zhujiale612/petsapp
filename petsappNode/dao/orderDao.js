const mongoose = require("mongoose")

module.exports.getorders = async (curPage, eachPage) => {
  let count=await mongoose.model("order").count();
  const tableData5 = await mongoose
      .model("order")
      .find()
      .sort({
          _id:-1
      })
      .skip((curPage-1/eachPage))
      .limit(eachPage)
      .exec()
  return {
      curPage,
      eachPage,
      count,
      maxPage:Math.ceil(count/eachPage),
      tableData5
  }
}


module.exports.addorders = async (data) => {
      return await mongoose.model("order").create(data)
}

module.exports.delorders = async (_id) => {
 
     await mongoose.model("order").remove({_id:_id.id})
     return true
}

module.exports.setorders = async ({_id}) => {
 console.log(_id)
    await mongoose.model("order").update({_id},{orderState:"已支付"})
    return true
}

