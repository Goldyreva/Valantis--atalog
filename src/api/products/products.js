import {$host} from "../index";

//константы для запроса по фильтру
const productFilter = "product";
const priceFilter = "price";
const brandFilter = "brand";

//получение всех id
export const getIds = async () => {
    let res = undefined;
    
    while (res === undefined) {
        try {
            res = await $host.post("", {"action": "get_ids"});
        } catch (e) {
            if(e.response.data !== undefined)
                console.error(`Error id: ${e.response.data}`);
        }
    }
    
    return res.data.result.filter((item, index) => res.data.result.indexOf(item) === index);
}

//получение всех брендов
export const getBrands = async () => {
    let res = undefined;

    while (res === undefined) {
        try {
            res = await $host.post("", {
                "action": "get_fields",
                "params": {"field": "brand"}
            });
        } catch (e) {
            if(e.response.data !== undefined)
                console.error(`Error id: ${e.response.data}`);
        }
    }

    return res.data.result.filter((item, index) => res.data.result.indexOf(item) === index && res.data.result[index] !== null);
}

//получение товаров по id
export const getItems = async (offset, productIds) => {
    let ids = productIds.slice(offset * 50, offset * 50 + 50);
    let res = undefined;
    
    while (res === undefined) {
        try {
            res = await $host.post("", {"action": "get_items", "params": {"ids": ids}});
        } catch (e) {
            if(e.response.data !== undefined)
                console.error(`Error id: ${e.response.data}`);
        }
    }

    return res.data.result.reduce((item, index) => {
        if(!item.find(i => i.id === index.id))
            item.push(index);
        return item;
    }, []);
}

//получение и фильтрация id по фильтрам
export const getIdsByFilter = async (product, price, brand) => {
    let idsByFilter = []
    let idsByProduct = []
    let idsByPrice = []
    let idsByBrand = []
    let filledFields = 0
    if(product.length > 0){
        let res = await getIdsByFilterField(productFilter, product)
        idsByProduct = res.data.result.filter((item, index) => res.data.result.indexOf(item) === index);
        filledFields++
    }
    if(price > 0) {
        let res = await getIdsByFilterField(priceFilter, price)
        idsByPrice = res.data.result.filter((item, index) => res.data.result.indexOf(item) === index);
        filledFields++
    }
    if (brand.length > 0){
        let res = await getIdsByFilterField(brandFilter, brand)
        idsByBrand = res.data.result.filter((item, index) => res.data.result.indexOf(item) === index);
        filledFields++
    }
    let idsByAllFields = idsByProduct.concat(idsByPrice).concat(idsByBrand)

    if(idsByAllFields.length > 0) {
        idsByAllFields.reduce((acc, i) => {
            if (acc.hasOwnProperty(i)) {
                acc[i] += 1;
            } else {
                acc[i] = 1;
            }
            if(acc[i] === filledFields){
                idsByFilter.push(i)
            }
            return acc
        }, {})
    }

    return idsByFilter;

}

//получение id по определенному фильтру
export const getIdsByFilterField = async (filter, value) => {
    let res = undefined
    let body = ''

    if(filter === priceFilter) {
        body = `{"action": "filter","params": {"${filter}": ${value}}}`
    } else{
        body = `{"action": "filter","params": {"${filter}": "${value}"}}`
    }

    while (res === undefined) {
        try {
            res = await $host.post(
                "",
                JSON.parse(body)
            );
        } catch (e) {
            if (e.response.data !== undefined)
                console.error(`Error id: ${e.response.data}`);
        }
    }
    return res
}