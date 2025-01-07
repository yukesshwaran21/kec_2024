array = [10,20,30,40,5,50,6,"a","KEC",true]
console.log(array);

//for...in loop
for(var a in array)
{
    console.log("Element present in index",a,"is",array[a]);
}

//for..of loop
for(var b of array)
{
    console.log(b);
}

//for each
array.forEach((index,Element)=>{
    console.log("Index is",index,"it's element is",Element);
})
   
array.forEach((Element,index)=>{
    console.log("Element is",Element,"it's index is",index);
})


objType1={
    "firstname": "Pooja",
    "lastname" : "Shree",
    "age": "19"
}
console.log(objType1);
Object.entries(objType1).forEach(([key,value])=>{
    console.log(key,value)
})