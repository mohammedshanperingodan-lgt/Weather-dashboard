function countdigits(num){
    let count=0
   
    for(let key of num){
         key =string(key)
        count++
    }
    return count
}
console.log(countdigits(12345))
console.log(countdigits(908))
console.log(countdigits(7))
