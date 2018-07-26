let { getservices,getServicesByPage,remove,Modify} = require("../dao/serviceDao");


// 查询
module.exports.getservices = async (services) => {
    return await getservices(services);
    // console.log(await getservices(services))
}
module.exports.getServicesByPage = async (services) => {
    return await getServicesByPage(services);
    // console.log(await getservices(services))
}
module.exports.remove = async (_id) => {
    return await remove(_id);
}
module.exports.Modify = async (info) => {
    const data =await Modify(info)
    if(data.ok){
        return await getServicesByPage(info.eachPage,info.curPage);
    }
    // console.log(await change(id))
    
}