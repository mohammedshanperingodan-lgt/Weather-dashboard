function divisiblenum(num){
let arr=[];
for (let value  of num){
    if (value%3==0){
        arr.push(value)
    }
   
}
 return arr
}

console.log(divisiblenum([3, 5, 6, 8, 9]))
console.log(divisiblenum(([1, 2, 4, 5])))
console.log(divisiblenum(([6, 9, 12, 14])))