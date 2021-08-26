/* ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।  */

const divyder = (number) => number / 5;
const value1 = divyder(50);
// console.log(value1);

const value2 = divyder(42);
// console.log(value2);

/* ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  */

const doubleNumber = (num1, num2) => (num1 + 2) * (num2 + 2);

const twoValue1 = doubleNumber(2, 4);
// console.log(twoValue1);

const twoValue2 = doubleNumber(5, 4);
// console.log(twoValue2);

/* ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  */

const threeNumber = (num1, num2, num3) => {
  const multiply = num1 * num2 * num3;
  return multiply;
};

const threeValue = threeNumber(2, 2, 2);
// console.log(threeValue);

const threeValue2 = threeNumber(2, 3, 5);
// console.log(threeValue2);

/* ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।  */

const twoNumbers = (num1, num2) => {
  const fristNumber = num1 + 2;
  const secoundNumber = num2 + 2;
  const multi = fristNumber * secoundNumber;
  return multi;
};
const twoValues = twoNumbers(20, 24);
console.log(twoValues);
console.log(twoNumbers(2, 2));
