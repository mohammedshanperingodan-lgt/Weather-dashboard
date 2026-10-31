function cheapestproduct(obj){
    let price=Infinity;
    let product="";
    for(let key in obj){
        if(obj[key]<price){
            price=obj[key];
            product=key;

        }
    }console.log(product);
} cheapestproduct({phone:25000,laptope:55000,tablet:3000})
