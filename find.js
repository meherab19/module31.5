/* একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */
const products=[
    {name:'sumsung', price:10000, color:'green'},
    {name:'realme', price:13000, color:'whiteGray'},
    {name:'nokia', price:2500, color:'black'},
    {name:'xaiomi', price:1000, color:'white'},
    {name:'oppo', price:12000, color:'pink'},
    {name:'vivo', price:16000, color:'gray'},
    {name:'htc', price:1600, color:'blue'}
    
]
//  filter the produts here upto 5000
// const Price= products.filter(product=>product.price>5000);

//find the product here up to 5000
const Price= products.find(product=>product.price>5000);
console.log(Price);

