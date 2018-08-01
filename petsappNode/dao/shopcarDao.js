const mongoose = require("mongoose")

module.exports.getshopcar = async (curPage, eachPage) => {
  let count=await mongoose.model("shopcar").count();
  const tableData5 = await mongoose
      .model("shopcar")
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


module.exports.addshopcar = async (data) => {
      return await mongoose.model("shopcar").create(data)
}

module.exports.delshopcar = async (_id) => {
 
     await mongoose.model("shopcar").remove({_id:_id.id})
     return true
}



