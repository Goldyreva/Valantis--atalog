import {$host} from "../index";
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