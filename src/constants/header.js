import {md5} from "js-md5";

export const header = {
    'X-Auth': md5(`Valantis_${new Date().toISOString().slice(0, 10).replace(/-/g, '')}`)
}