//1.Variables
// var,let,const=10;

//2. Arrow Function

arrowFun=(Students)=>{
    return(Students[0])
}
console.log(arrowFun(['cse,it,aiml','it','aiml','cse']));

//3. Destructuring operator
var marks=[90,95,93]
var[m1,m2]=marks
console.log(m1,m2);

//4.Ternary Operator
a=10
out=(a%2==0)?"Even":"Odd";
console.log(a,"is",out);

//5.Spread Operator

arr1=[10,20,30]
arr2=[40,50,60]
arr3=[...arr1,arr2]
console.log(arr3);

//6.Rest Operator


//7.Scope
const pi=3.14
var a=5
console.log("o",pi);
console.log("o",a)
{
    var a=10
    let b=10.5
    console.log("b",a);
    console.log("b",b);
}
console.log("o",pi);
console.log("o",a);

//Hoisting
console.log(a);
var a=10
console.log(a);

//console.log(a);
//const a=20
//console.log(a);

console.log(a);
let a=20
console.log(a);

