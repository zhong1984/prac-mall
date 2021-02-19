import axios from "axios";

//      axios.create生成的就是一个promise对象，无需像上面那样再封装一个promise
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    //axios拦截器
    instance.interceptors.request.use(config => {
        // console.log(config);
        //拦截后必须放行
        return config;
    }, error => {
        console.log(error);
    })

    instance.interceptors.response.use(res => {
        // console.log(res.data);
        return res.data;
    }, error => {
        console.log(error);
    })

    return instance(config)
}


