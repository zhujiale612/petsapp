const mongoose = require("mongoose")
module.exports.getservices = async (services) => {
    return await mongoose
        .model("services")
        .create(services)
}
module.exports.getServicesByPage = async ({ curPage, eachPage }) => {
    //  console.log(services)
    curPage = curPage * 1
    eachPage = eachPage * 1
    const serviceModel = mongoose.model("services");
    let count = await serviceModel.count()
    let data = await serviceModel
        .find()
        .sort({
            _id: -1
        })
        .skip((curPage - 1) * eachPage)
        .limit(eachPage)
        .exec();
    return {
        curPage,
        eachPage,
        count: count,
        maxPage: Math.ceil(count / eachPage),
        services: data
    }
}
module.exports.remove = async ({ _id }) => {
    return await mongoose.model("services").findByIdAndRemove(_id);

}
module.exports.Modify = async (info) => {
    const {form,_id}=info
    const data = await mongoose
        .model('services')
        .update({ _id:_id },form)
    return data
}
