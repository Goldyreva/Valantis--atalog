import axios from "axios";
import moment from "moment";
import md5 from "md5";

let timestamp = moment().format("YYYYMMDD");
let auth = md5(`Valantis_${timestamp}`);

export const $host = axios.create({
    baseURL: 'https://api.valantis.store:41000/',
    headers: {'X-Auth': auth}
});