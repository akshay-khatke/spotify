

const authUrls = () => { 

    const getAuthUrl = (url: string) => `/api/Auth/${url}`;

    const authUrl = {
            login: getAuthUrl('Login'),
            register: getAuthUrl('Register')
    };

    const getCommonUrlData = (url: string) => `/api/Common/${url}`;

        const commonUrl= {
            products:getCommonUrlData("products") 
    }
    return { 
        authUrl ,commonUrl
    }
}
export default authUrls;