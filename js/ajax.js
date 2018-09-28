
function sendAjax(url,options){
    var _default = {
        method:"GET",
        data:null,
        success:null,
        error:null
    };
    //替换默认值
    for(var i in options){
        _default[i] = options[i];
    }
    // 如果是get请求就需要url拼接和解决缓存问题
    if(_default.method.toUpperCase() === "GET"){
        var f = url.indexOf("?") > -1 ? "&" : "?";
        url += f + "_=" + Date.now();
        for(var j in _default.data){
            url += "&" + j + "=" + data[j];
        }
        _default.data = null;
    }
    var xhr = new XMLHttpRequest();
    xhr.open(_default.method,url,true);
    xhr.send(_default.data);
    xhr.onreadystatechange = function(){
        // 请求成功
        if(xhr.readyState === 4){
            var data = xhr.responseText;
            if(xhr.status === 200){
                if(typeof _default.success === "function"){
                    _default.success(data);
                }
            }else{
                if(typeof _default.error === "function"){
                    _default.error(data);
                }
            }
        }
    };
}