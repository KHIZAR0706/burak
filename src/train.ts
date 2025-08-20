// ZC-TASK
// Masalani izohi: Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.
// Masalan: celsiusToFahrenheit(0) return 32; celsiusToFahrenheit(10) return 50;
// Yuqoridagi misolda, 0°C, 32°F'ga teng. Yoki 10 gradus Selsiy, 50 Farenhaytga teng. °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.


// Masalani yechimi: 

function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

const result1 = celsiusToFahrenheit(0);
console.log(result1);

const result2 = celsiusToFahrenheit(10);
console.log(result2);

const result3 = celsiusToFahrenheit(13);
console.log(result3);

const result4 =celsiusToFahrenheit(20);
console.log(result4);

const result5 = celsiusToFahrenheit(30);
console.log(result5);

const result6 = celsiusToFahrenheit(100);
console.log(result6);

const result7 = celsiusToFahrenheit(90);
console.log(result7);


// ZB-TASK
// Masalani izohi: Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// Masalan: randomBetween(30, 50) return 45

// Masalani yechimi:

// function randomBetween(a: number, b: number): number {
//   const min = Math.ceil(Math.min(a, b)),
//         max = Math.floor(Math.max(a, b));
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const result1 = randomBetween(30, 50);
// console.log(result1);

// const result2 = randomBetween(10, 20);
// console.log(result2)

// const result3 = randomBetween(13, 19);
// console.log(result3)

// const result4 = randomBetween(-5, 5);
// console.log(result4)

// const result5 = randomBetween(11, 18);
// console.log(result5)

// const result6 = randomBetween(98, 113);
// console.log(result6)

// const result7 = randomBetween(-6, 12);
// console.log(result7)



// Z-TASK
// Masalani izohi: Shunday function yozing. Bu function sonlardan iborat array qabul qilsin. Function'ning vazifasi array tarkibidagi juft sonlarni topib ularni yig'disini qaytarsin.
// Masalan: sumEvens([1, 2, 3]); return 2; sumEvens([1, 2, 3, 2]); return 4;
// Yuqoridagi misolda, bizning funktsiya berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

// Maslani yechimi: 

// function sumEvens(arr: number[]): number {
//   return arr
//     .filter(num => num % 2 === 0)
//     .reduce((sum, num) => sum + num, 0); 
// }

// const result1 = sumEvens([1, 2, 3]);
// console.log(result1);

// const result2 = sumEvens([1, 2, 3, 2]);
// console.log(result2);

// const result3 = sumEvens([4, 5, 6, 7, 8]);
// console.log(result3);

// const result4 = sumEvens([10, 11, 12, 13]);
// console.log(result4);

// const result5 = sumEvens([8, 9, 10, 11, 12]);
// console.log(result5);

// const result6 = sumEvens([2, 3, 4, 5]);
// console.log(result6);

// const result7 = sumEvens([6, 7, 8, 9, 10]);
// console.log(result7);


// Y-TASK
// Masalani izohi: Shunday function yozing, uni 2'ta array parametri bo'lsin. Bu function ikkala arrayda ham ishtirok etgan bir xil qiymatlarni yagona arrayga joylab qaytarsin.
// Masalan: findIntersection([1,2,3], [3,2,0]) return [2,3] Yuqoridagi misolda, argument sifatida berilayotgan array'larda o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
// ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga joylab return qilmoqda.

// Maslani yechimi:

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter(num => arr2.includes(num));
// }

// const result1 = findIntersection([1, 2, 3], [3, 2, 0]);
// console.log(result1);

// const result2 = findIntersection([4, 5, 6], [6, 7, 4]);
// console.log(result2);

// const result3 = findIntersection([1, 4, 3], [3, 4, 2]);
// console.log(result3);

// const result4 = findIntersection([5, 6, 7], [7, 5, 0]);
// console.log(result4);

// const result5 = findIntersection([13, 14, 15], [13, 15, 16]);
// console.log(result5);

// const result6 = findIntersection([5, 6, 7], [6, 7, 8]);
// console.log(result6);

// const result7 = findIntersection([10, 11, 13], [11, 12, 13]);
// console.log(result7);


// X-TASK
// Masalani izohi: Shunday function yozing, uni object va string parametrlari bo'lsin. Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri necha marotaba takrorlanganlini sanab qaytarsin.
// Eslatma => Nested object'lar ham sanalsin
// Masalan: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2
// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'. Funktsiya, shu ikkinchi argument 'model', birinchi argument object tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

// Masalani yechimi:

// function countOccurrences(car: any, keyToFind: string): number {
//   if (typeof car !== 'object' || car === null) return 0;

//   let count = 0;

//   for (const key in car) {
//     if (key === keyToFind) count++;
//     count += countOccurrences(car[key], keyToFind); 
//   }

//   return count;
// }

// const car1 = { model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } },
//       result1 = countOccurrences(car1, 'model');
// console.log(result1); 

// const car2 = { model: 'Lamborghini', steer: { model: 'HANKOOK', wheel: { model: 'Pirelli' } } },
//       result2 = countOccurrences(car2, 'model');
// console.log(result2); 

// const car3 = { model: 'Audi', year: 2020, color: 'green' },
//       result3 = countOccurrences(car3, 'model');
// console.log(result3); 

// const car4 = { model: 'BMW', specs: { model: 'X5', engine: { model: 'V8' } } },
//       result4 = countOccurrences(car4, 'model');
// console.log(result4);

// const car5 = { model: 'Tesla', specs: { model: 'Model S', parts: { engine: { model: 'Electric' }, wheels: { model: 'Michelin' } } } },
//       result5 = countOccurrences(car5, 'model');
// console.log(result5);

// W-TASK
// Masalani izohi: Shunday function yozing, u o'ziga parametr sifatida yagona array va number qabul qilsin. Siz tuzgan function arrayni numberda berilgan uzunlikda kesib bo'laklarga ajratgan holatida qaytarsin.
// Masalan: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti


// Masalani yechimi:

// function chunkArray(arr: any[], size: number): any[][] {
//   const result: any[][] = [];

//   for (let i = 0; i < arr.length; i += size) {
//     const chunk = arr.slice(i, i + size);
//     result.push(chunk);
//   }

//   return result;
// }

// const result1 = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(result1);

// const result2 = chunkArray([10, 20, 30, 40, 50, 60], 4);
// console.log(result2);

// const result3 = chunkArray([1, 2, 3, 4, 5, 6, 7], 5);
// console.log(result3);

// const result4 = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
// console.log(result4);

// const result5 = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3);
// console.log(result5);

// const result6 = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 2);
// console.log(result6);


// V-TASK
// Masalani izohi: Shunday function yozing, uni string parametri bo'lsin. Va bu function stringdagi har bir harfni o'zi bilan necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
// Masalan: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}. Yuqoridagi misolda, 'hello' so'zi tarkibida qatnashgan harflar necha marotaba takrorlangini bilan object sifatida qaytarilmoqda.

// Masalani yechimi:

// function countChars(str: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {};

//   for (const char of str) {
//     result[char] = (result[char] || 0) + 1;
//   }

//   return result;
// }

// const result1 = countChars("hello");
// console.log(result1);

// const result2 = countChars("world");
// console.log(result2);

// const result3 = countChars("dad");
// console.log(result3);

// const result4 = countChars("mom");
// console.log(result4);

// const result5 = countChars("tashkent");
// console.log(result5);

// const result6 = countChars("capital");
// console.log(result6);

// const result7 = countChars("korea");
// console.log(result7);


// U-TASK
// Masalani izohi: Shunday function tuzing, uni number parametri bo'lsin. Va bu function berilgan parametrgacha, 0'dan boshlab oraliqda nechta toq sonlar borligini aniqlab return qilsin.
// Masalan: sumOdds(9) return 4; sumOdds(11) return 5;
// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda. Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

// Masalani yechimi:

// function sumOdds(n: number): number {
//   let count = 0;
//   for (let i = 1; i < n; i += 2) {
//     count++;
//   }
//   return count;
// }

// const result1 = sumOdds(6);
// console.log(result1);

// const result2 = sumOdds(7);
// console.log(result2);

// const result3 = sumOdds(19);
// console.log(result3);

// const result4 = sumOdds(13);
// console.log(result4);

// const result5 = sumOdds(15);
// console.log(result5);

// const result6 = sumOdds(11);
// console.log(result6);

// const result7 = sumOdds(4);
// console.log(result7);

// T-TASK
// Masalani izohi: Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin. Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.
// Masalan: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];
// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.


// Masalani yechimi:

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// const result1 = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// console.log(result1);

// const result2 = mergeSortedArrays([7, 8, 6, 13], [0, 5, 14]);
// console.log(result2)

// const result3 = mergeSortedArrays([1, 3, 4, 10], [0, 5, 11]);
// console.log(result3)

// const result4 = mergeSortedArrays([0, 1, 2, 18], [3, 2, 19]);
// console.log(result4)

// const result5 = mergeSortedArrays([0, 9, 15, 17], [1, 6, 21]);
// console.log(result5)

// const result6 = mergeSortedArrays([0, 3, 4, 31], [70, 98, 68]);
// console.log(result6);

// S-TASK
// Masalani izohi: Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.
// Masalan: missingNumber([3, 0, 1]) return 2.

// Masalani yechimi:

// function missingNumber(nums: number[]): number {
//   const n = nums.length,
//    expectedSum = (n * (n + 1)) / 2,
//    actualSum = nums.reduce((sum, num) => sum + num, 0); 
//   return expectedSum - actualSum; 
// }


// const result1 = missingNumber([0, 1, 2, 3, 4, 6]);
// console.log(result1);

// const result2 = missingNumber([0, 1, 2, 3, 4, 5, 7]);
// console.log(result2);

// const result3 = missingNumber([0, 1, 2, 3, 4, 5, 6, 8]);
// console.log(result3);

// const result4 = missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]);
// console.log(result4);

// const result5 = missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 10]);
// console.log(result5);

// const result6 = missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11]);
// console.log(result6);

// R-TASK
// Masalani izohi: Shunday function yozing, u string parametrga ega bo'lsin. Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa, string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin
// MAsalan: calculate("1 + 3"); return 4; 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.


// Masalani yechimi:

// function calculate(expression: string): number {
//  return expression.split('+').reduce((acc, val) => acc + Number(val.trim()), 0);

// }

// const result1 = calculate("1 + 3");
// console.log(result1);

// const result2 = calculate("6 + 7");
// console.log(result2);

// const result3 = calculate("2 + 19");
// console.log(result3);

// const result4 = calculate("7 + 9");
// console.log(result4);

// const result5 = calculate("15 + 19");
// console.log(result5);

// const result6 = calculate("2 + 7");
// console.log(result6);

// const result7 = calculate("9 + 19");
// console.log(result7);


// Q-TASK
// Masalani izohi: Shunday function yozing, u 2 ta parametrga ega bo'lib birinchisi object, ikkinchisi string bo'lsin. Agar qabul qilinayotgan ikkinchi string, objectning biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.
// Masalan:  hasProperty({ name: "BMW", model: "M3" }, "model"); return true; Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda
// Masalan:  hasProperty({ name: "BMW", model: "M3" }, "year"); return false; Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.


// Masalani yechimi: 

// function hasProperty(obj: object, key: string): boolean {
//   return key in obj;
// }

// const result1 = hasProperty({name: "BWM", model: "M3"}, "model");
// console.log(result1);

// const result2 = hasProperty({name: "BWM", model: "M3"}, "year");
// console.log(result2);


// const result3 = hasProperty({name: "BWM", year: "1998"}, "model");
// console.log(result3);

// const result4 = hasProperty({name: "BWM", year: "1998"}, "year");
// console.log(result4);


// P-TASK
// Masalani izohi: Parametr sifatida yagona object qabul qiladigan function yozing. Qabul qilingan objectni nested array sifatida convert qilib qaytarsin.
// Masalan: objectToArray({a:10, b:20}) return [['a', 10], ['b', 20]].


// Masalani yechimi: 

// function objectToArray(obj: Record<string, any>): [string, any][] {
//     return Object.entries(obj);
// }

// const result1 = objectToArray({a: 10, b: 20});
// console.log(result1);

// const result2 = objectToArray({c: 6, d: 7});
// console.log(result2);

// const result3 = objectToArray({e: 19, f: 13});
// console.log(result3);


// O-TASK
// Masalani izohi: Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin. Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin
// Masalan: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45
// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35. Qolganlari nested bo'lib yoki type'lari number emas.


// Masalani yechimi:

// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;

//   for (const item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }

//   return sum;
// }

// const result1 = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
// console.log(result1); 

// const result2 = calculateSumOfNumbers([7, "13", { son: 10 }, true, 6]);
// console.log(result2); 

// const result3 = calculateSumOfNumbers([2, "21", { son: 10 }, true, 19]);
// console.log(result3); 



// N-TASK
// MAsalani izohi: Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir xil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// Masalan: palindromCheck("dad") return true; palindromCheck("son") return false;

// Masalani yechimi: 

// function palindromCheck(word: string): boolean {
//   const reversed = word.split('').reverse().join('');
//   return word === reversed;
// }

// const result1 = palindromCheck("dad");
// console.log(result1);

// const result2 = palindromCheck("mom");
// console.log(result2);

// const result3 = palindromCheck("son");
// console.log(result3);

// const result4 = palindromCheck("noon");
// console.log(result4);

// const result5 = palindromCheck("refer");
// console.log(result5);

// const result6 = palindromCheck("pen");
// console.log(result6);

// const result7 = palindromCheck("racecar");
// console.log(result7);

// const result8 = palindromCheck("civic");
// console.log(result8);

// const result9 = palindromCheck("day");
// console.log(result9);


// M-TASK
// Masalani izohi:Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// Masalan: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// Masalani yechimi:

// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//   return numbers.map(num => ({ number: num, square: num * num }));
// }

// const result1 = getSquareNumbers([1, 2, 3]);
// console.log(result1);

// const result2 = getSquareNumbers([6, 5, 19]);
// console.log(result2);

// const result3 = getSquareNumbers([15, 2, 9]);
// console.log(result3);

// const result4 = getSquareNumbers([70, 15, 2]);
// console.log(result4);

// const result5 = getSquareNumbers([7, 13, 20]);
// console.log(result5);

// const result6 = getSquareNumbers([8, 4, 5]);
// console.log(result6);

// const result7 = getSquareNumbers([69, 70, 98]);
// console.log(result7);

// L-TASK
// Masalani izohi: Shunday function yozing, u string qabul qilsin va string ichidagi hamma so'zlarni chappasiga yozib va so'zlar ketma-ketligini buzmasdan stringni qaytarsin.
// Masalan: reverseSentence("we like coding") return "ew ekil gnidoc";

// Masalani yechimi:

// function reverseSentence(sentence: string): string {
//   return sentence
//    .split(' ')
//    .map(word => word.split('').reverse().join(''))
//    .join(' ');
// }

// const result1 = reverseSentence("we like coding");
// console.log(result1);

// const result2 = reverseSentence("Hello World");
// console.log(result2);

// const result3 = reverseSentence("I like playing football");
// console.log(result3);

// const result4 = reverseSentence("Tashkent is the capital of Uzbekistan");
// console.log(result4);

// const result5 = reverseSentence("NodeJS is Backend Language");
// console.log(result5);

// const result6 = reverseSentence("ReactJS is Frontend Library");
// console.log(result6);

// K-TASK
// Masalani izohi: Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// Masalan: countVowels("string") return 1;

// Masalani yechimi: 

// function countVowels(word: string): number {
//   return Array.from(word.toLowerCase())
//   .filter(char => ['a', 'e', 'i', 'o', 'u'].includes(char))
//   .length;
// }

// const result1 = countVowels("NodeJS");
// console.log(result1);

// const result2 = countVowels("Typescript");
// console.log(result2);

// const result3 = countVowels("Uzbekistan");
// console.log(result3);

// const result4 = countVowels("JavaScript");
// console.log(result4);

// const result5 = countVowels("Frontend and Backend");
// console.log(result5);

// const result6 = countVowels("Sessions");
// console.log(result6);

// const result7 = countVowels("Authentication");
// console.log(result7);


// J-TASK
// Msalani izohi: Shunday function tuzing, u string qabul qilsin. Va string ichidagi eng uzun so'zni qaytarsin.
// Masalan: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"
// Yuqoridagi text tarkibida 'Uzbekistan' eng uzun so'z bo;lganligi uchun 'Uzbekistan' ni qaytarmoqda.

// Masalani yechimi:

// function findLongestWord(input: string): string {
//   const words = input.split(" ");
//   let longestWord = "";
//   for (const word of words) {
//     if(word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// const result1 = findLongestWord("I came from Uzbekistan!");
// console.log(result1);

// const result2 = findLongestWord("Tashkent is the capital of my country!");
// console.log(result2);

// const result3 = findLongestWord("I love Football!");
// console.log(result3);


// I-TASK
// Masalani izohi: Shunday function tuzing, u parametrdagi array ichida eng ko'p takrorlangan raqamni topib qaytarsin.
// Masalan: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4. 
// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

// Masalani yechimi:

// function majorityElement(arr: number[]): number {
//   let max = 0;
//   let ele = arr[0];

//   for (let a = 0; a < arr.length; a++) {
//     let count = 0;
//     for (let b = 0; b < arr.length; b++) {
//       if (arr[a] === arr[b]) {
//         count++;
//       }
//     }
//     if (count > max) {
//       max = count;
//       ele = arr[a];
//     }
//   }

//   return ele;
// }

// const result1 = majorityElement([1, 2, 3, 19, 5, 19, 3, 19]);
// console.log(result1)

// const result2 = majorityElement([3, 6, 2, 7, 5, 2, 2, 1]);
// console.log(result2);

// const result3 = majorityElement([7, 8, 9, 7, 10, 6, 5, 4]);
// console.log(result3);

// const result4 = majorityElement([9, 4, 9, 6, 9, 7, 1]);
// console.log(result4);

// const result5 = majorityElement([15, 20, 13, 15, 10, 15, 11]);
// console.log(result5);

// const result6 = majorityElement([6, 7, 6, 5, 3, 6, 4]);
// console.log(result6);

// const result7 = majorityElement([0, 1, 2, 0, 7, 3, 0]);
// console.log(result7);


/*  Project Standards:
  - Logging standards
  - Naming standards
      function, method, variables => CAMEL case.  goHome
      class => PASCAL case                         MemberService
      folder, file => KEBAB case 
      css => SNAKE case                            button_style 
  - Error handling 
  
  */

  /* Request:
    Traditional Api
    Rest Api
    GraphQL Api
    ...
  */

  /* Frontend Development:
  Traditional FD => BSSR (Admin) => EJS
  Modern FD  => SPA (Users' application) => REACT
  
  */ 
 
  /* Cookies:
     request join
     self destroy  
  */

  /* Validation:
  Frontend validation
  Backend validation
  Database validation
  */   

// H2-TASK
// Masalani izohi: Shunday function tuzing, unga string argument pass bo'lsin. Function ushbu argumentdagi digitlarni yangi stringda return qilsin.
// Masalan: getDigits("m14i1t") return qiladi "141"


// Masalani yechimi:
 
// function getDigits(input: string): string {
//   let digits = '';
//   for (let char of input) {
//     if (char >= '0' && char <= '9') {
//       digits += char;
//     }
//   }
//   return digits;
// }

// const result1 = getDigits("m14i1t");
// console.log(result1);

// const result2 = getDigits("g11m3t");
// console.log(result2);

// const result3 = getDigits("ma19n");
// console.log(result3);

// const result4 = getDigits("ab15s");
// console.log(result4);

// const result5 = getDigits("h09w8");
// console.log(result5);

// const result6 = getDigits("ma06d");
// console.log(result6);

// const result7 = getDigits("g0i0y7");
// console.log(result7);


// H-TASK
// Masalani izohi: Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin.
// Masalan: getPositive([1, -4, 2]) return qiladi "12"

// Masalani yechimi:

// function getPositive(arr: number[]): string {
//     return arr
//         .filter((num: number) => num > 0)
//         .join(''); 

// }

// const result1 = getPositive([0, -4, 2]);
// console.log(result1);

// const result2 = getPositive([1, -3, 9]);
// console.log(result2);

// const result3 = getPositive([1, -7, 5]);
// console.log(result3);

// const result4 = getPositive([7, -2, -5]);
// console.log(result4);

// const result5 = getPositive([-1, 0, 9]);
// console.log(result5);

// const result6 = getPositive([1, 0, 3]);
// console.log(result6);

// const result7 = getPositive([0, -3, 6]);
// console.log(result7);

// G-TASK
// Masalani izohi: Yagona parametrga ega function tuzing.Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.
// Masalan: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 soniniYuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

// Masalani yechimi:

// function getHighestIndex(arr: number[]): number {
//     let max: number = arr[0];
//     let index: number = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//             index = i;
//         }
//     }

//     return index;
// }

// const result1 = getHighestIndex([5, 21, 12, 21, 8]);
// console.log(result1); 

// const result2 = getHighestIndex([9, 10, 7, 10, 6]);
// console.log(result2); 

// const result3 = getHighestIndex([13, 27, 7, 19, 12]);
// console.log(result3); 

// const result4 = getHighestIndex([99, 100, 75, 98, 66]);
// console.log(result4); 