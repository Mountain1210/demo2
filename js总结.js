/* 
* @Author: anchen
* @Date:   2015-10-24 09:01:03
* @Last Modified by:   anchen
* @Last Modified time: 2015-10-24 12:37:28
*/

var o={};
var o=new Object();
console.log(o.constructor);
console.log(o.toString());
console.log(o.valueOf());

function sum(a,b){
    var arr=[];
    arr.push(a);
    arr.push(b);
    return arr;
}
console.log(sum(2,3).valueOf())


  function Person(name,age){  
        this.name=name;  
        this.age=age;  
    }  
    Person.prototype.sayHello=function(){  
        console.log("使用原型得到Name："+this.name);  
    }  
    var per=new Person("马小倩",21);  
    per.sayHello(); //输出：使用原型得到Name:马小倩  

      
    function Student(){}  
    Student.prototype=new Person("洪如彤",21);  
    var stu=new Student();  
    Student.prototype.grade=5;  
    Student.prototype.intr=function(){  
        alert(this.grade);  
    }  
console.log('=========')
console.log(stu.constructor.constructor.constructor);
console.log(stu.toString())
console.log(stu.valueOf())

function myfucn(a,b,c,d){return a};
console.log(myfucn.constructor)
console.log(myfucn.length)
function f(){
    var args=Array.prototype.slice.call(arguments);
    return args.reverse();
}
console.log(f(1,2,3,4));
console.log(Array.prototype)
console.log(Object.prototype)
console.log(Student.prototype)
