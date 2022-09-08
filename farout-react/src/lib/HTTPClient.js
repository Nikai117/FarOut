import axios from "axios";
import config from "../config"

const HTTPClient = {};

HTTPClient.Init = async () => {
    HTTPClient.WebClient = axios.create({
        baseURL: config.api_url,

    });
}

HTTPClient.MakeRequest = async (url, opts = {}) => {
    if(!HTTPClient.WebClient) {
        await HTTPClient.Init();
    }
    try {
        let data = await HTTPClient.WebClient({url, ...opts });
        return data;
    }
    catch(error) {
        return error.response;
    }
};

    ["Post", "Get", "Delete", "Put"].forEach((method) => {

        HTTPClient[method] = (url, opts = {}) => {
            return HTTPClient.MakeRequest(url, {
                ...opts,
                method: method.toLowerCase(),
            });
        };
    });

    export default HTTPClient;