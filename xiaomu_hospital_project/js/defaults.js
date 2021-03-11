// 默认参数
const DEAFULT = {
    method: 'GET',
    // 请求头携带参数
    params: null,
    // params:{
    //     username: 'alex',
    //     age: 18
    // }
    // 请求体携带数据
    data: null,
    // data: {
    //     username: 'alex'
    // }
    contentType: 'application/x-www-form-urlencoded',
    responseType: "",
    timeoutTime: 0,
    withCredentials: false,

    // 方法
    success(){},
    httpCodeError(){},
    error(){},
    abort(){},
    timeout(){}
}
