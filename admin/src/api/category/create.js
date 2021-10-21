import instance from "../request";
const create = (data) => {
    instance({
        method: 'POST',
        url: '/category/create',
        data
    })
}
export default create