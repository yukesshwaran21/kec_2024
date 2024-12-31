function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); 
console.log(sum(5, 10));      


const user = { name: "Alice", age: 25, city: "New York", country: "USA" };

const { name, ...details } = user;

console.log(name);    
console.log(details); 