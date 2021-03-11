import DEAFULT from './defaults.js'

// ajax类

class Ajax {
    constructor(url, options) {
        this.url = url;
        this.options = Object.assign({}, DEAFULT, options);
        // 初始化
        this.init();
    }

    init() {
        const xhr = new XMLHttpRequest();
        this.xhr=xhr;

        this.bindEvents();
        
    }

    bindEvents(){
        const xhr = this.xhr;
        const {success, httpCodeError, error, abort, timeout} = this.options;
        //


        xhr.addEventListener('load', () => {
            if (this.ok()) {
                // console.log(xhr.responseText);
                success(xhr.response, xhr);
            }else{
                httpCodeError(xhr.status, xhr);
            }
        }, false);

        // 
        xhr.addEventListener('error', () => {
            error(xhr);
        }, false);

        xhr.addEventListener('abort', () => {
            abort(xhr);
        }, false);


        xhr.addEventListener('timeout', () => {
            timeout(xhr);
        }, false);
        
    }
    // 检测响应的http状态码是否正常
    ok(){
        const xhr=this.xhr;
        return xhr.status >= 200 && xhr.status < 300 || xhr.status === 304;
    }
}

export default Ajax;