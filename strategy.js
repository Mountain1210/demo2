/***
策略模式
***/

var strategies={
    "S":function(salary){
        return salary*4;
    },
    "A":function(salary){
        return salary*3;
    },
    "B":function(salary){
        return salary*2;
    }
}

var calculateBonus=function(level,salary){
    return strategies[level](salary);
}


console.log(calculateBonus('S',20000));
console.log(calculateBonus('A',20000));

/********************************************************/

/*
*id="registerForm" 下面有个input有个userName的Name
* 
 */
var strategies={
    isNonEmpty:function(value,errorMsg){
        if(value==='')
        {
            return errorMsg;
        }
    },
    minLength:function(value,length,errorMsg){
        if(value.length<length){
            return errorMsg;
        }
    },
    isMobile:function(value,errorMsg){
        if(!/(^1[3|5|8][0-9])/.test(value)){
            return errorMsg;
        }
    }
}

var validataFunc=function(){
    var validator=new Validator();
    /*************************添加一些校验规则*************************/
    validator.add(registerForm.userName,'isNonEmpty','用户不能为空');
    validator.add(registerForm.password,'minLength:6','密码长度不能少于6位');
    validator.add(registerForm.phoneNumber,'isMobile','手机号码式不正确');
    var errorMsg=validator.start(); //获得校验结果
    return errorMsg;//返回校验结果
}

var registerForm=document.getElementById("registerForm");
registerForm.onsubmit=function(){
    var errorMsg=validataFunc();
    if(errorMsg){
        alert(errorMsg);
        return false;//阻止表单提交
    }
}

validator.add(registerForm.password,'minLength:6','密码长度不能少于6位');

var Validator=function(){
    this.cache=[];
}

Validator.prototype.add=function(dom,rule,errorMsg){
    var ary=rule.split(':');
    this.cache.push(function(){
        var strategy=ary.shift();
        ary.unshift(dom.value);
        ary.push(errorMsg);
        return strategies[strategy].apply(dom,ary);
    });
};
Validator.prototype.start=function(){
    for(var i=0, validatorFunc; validatorFunc=this.cache[i++]){
        var msg=validatorFunc();
        if(msg){
            return msg;
        }
    }
};