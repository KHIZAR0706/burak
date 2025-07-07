// K-TASK
// Masalani izohi: Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// Masalan: countVowels("string") return 1;

// Masalani yechimi: 

function countVowels(word: string): number {
  return Array.from(word.toLowerCase())
  .filter(char => ['a', 'e', 'i', 'o', 'u'].includes(char))
  .length;
}

const result1 = countVowels("NodeJS");
console.log(result1);

const result2 = countVowels("Typescript");
console.log(result2);

const result3 = countVowels("Uzbekistan");
console.log(result3);

const result4 = countVowels("JavaScript");
console.log(result4);

const result5 = countVowels("Frontend and Backend");
console.log(result5);

const result6 = countVowels("Sessions");
console.log(result6);

const result7 = countVowels("Authentication");
console.log(result7);


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

  /*
    Traditional Api
    Rest Api
    GraphQL Api
    ...
  */

  /* 
  Traditional FD => BSSR (Admin) => EJS
  Modern FD  => SPA (Users' application) => REACT
  
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