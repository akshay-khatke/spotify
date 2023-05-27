import { Request } from "model";
import url from "service/urls";


const getCommonApi = ({ get, post, put }: Request) => {


    const common = {
        products: (params: any) => get({ url: url.auth.commonUrl.products, params }),
    };

    return {
        common
    }

}

export default getCommonApi;
