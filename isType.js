/* 
* @Author: anchen
* @Date:   2015-10-15 21:55:53
* @Last Modified by:   anchen
* @Last Modified time: 2015-10-24 09:41:42
*/

// var s='a string';

// var arr=[];

// var obj=new Object();

// if(typeof s=='string'){

// console.log( "typeof s=='string'  true"); //true

// }

// //打开浏览器的控制台，可以看到此代码的输出

// console.log( 's.constructor==String  :'+ (s.constructor==String) );

// console.log( 'arr.constructor==Array  :'+ (arr.constructor==Array) );

// console.log( 'obj.constructor==Object  :'+ (obj.constructor==Object) );


// function User(name , age){

// this.name=name;

// this.age=age;

// }

// var u=new User();

// console.log( 'typeof u  :'+typeof u );  //输出object  //显然，使用typeof判断复杂类型的对象，就失效了，但使用constructor就可以获取其真实类型

// console.log( 'u.constructor.name  :'+u.constructor.name );
// var is ={
//     types : ["Array", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"]
// };
// for(var i = 0, c; c = is.types[i ++ ]; ){
//     is[c] = (function(type){
//         return function(obj){
//            return Object.prototype.toString.call(obj) == "[object " + type + "]";
//         }
//     )(c);
// }
// }
// console.log(is.Array([])); // true
// console.log(is.Date(new Date)); // true
// console.log(is.RegExp(/reg/ig)); // true
//利用toString来判断对像的属性
 function isType(obj,type){
        return Object.prototype.toString.call(obj) ==="[object "+type+"]";
    }
    console.log(isType([],"Array"));
    console.log(isType(1,"Number"));
    console.log(isType("","String"));
    console.log(isType(new Date(),"Date"));
    console.log(isType(function(){},"Function"));
    console.log(isType(new RegExp(),"RegExp"));
    console.log(isType({},"Object"));
    console.log(isType(true,"Boolean"));
    console.log(isType(null,"Null"));
    console.log(isType(undefined,"Undefined"));

    var obj={
        one:1,
        two:2
    }
console.log(isType(obj,"Object"));
