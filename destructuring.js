/* ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।  */

const Numbers=[3,5,6,7,7,4,9,77,45,34];
[a,b,c,...rest]=Numbers;
const three=c;
// const afterThree= ...rest ;
console.log(three);
console.log(...rest);