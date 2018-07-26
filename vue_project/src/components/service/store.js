export default {
    strict: true,
    namespaced: true,
    state: {},
    mutations: {


    },
    actions: {
        async getservices(commit, services) {
            await fetch(
                "/serviceList/getservices",
                {
                    method: "post",
                    body: JSON.stringify(services),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then(res => res.json())
        },
        async remove(commit, id) {
            await fetch(
                "/serviceList/remove",
                {
                    method: "post",
                    body: JSON.stringify({ _id: id }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then(res => res.json())
        },
        async Modify(commit,info) {
            // console.log(servicesForm)
            await fetch(

                "/serviceList/Modify",
                {
                    method: "post",
                    body: JSON.stringify(info),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then(res => res.json())
            // return data
        },
    }
}