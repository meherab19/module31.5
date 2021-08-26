/*  অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো  */

const Numbers = [12, 23, 34, 45, 32, 21, 44, 55, 66, 6, 45, 66, 77];

// const FilterNumber=Numbers.filter(number=>number%2==1);
const FilterNumber = Numbers.filter((number) => number % 2);
// console.log(FilterNumber);

///find and filter number upto 50;
console.log(Numbers);
const filter = Numbers.filter((number) => number > 50);
// console.log(filter);

const find = Numbers.find((number) => number > 50);
// console.log(find);

