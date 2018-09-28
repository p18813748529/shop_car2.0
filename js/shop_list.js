
var shopList = (function(){
    return {
        init:function(ele){
            ele = this.$(ele);
        },
        $:function(ele){
            if(typeof ele !== "string"){
                return ele;
            }
            ele = document.querySelectorAll(ele);
            ele = ele.length > 1 ? ele : ele[0];
            return ele;
        },
        inserData:function(data){
            
        }
    }
}());