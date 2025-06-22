// H-TASK
// Masalani izohi: Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin.
// Masalan: getPositive([1, -4, 2]) return qiladi "12"

// Masalani yechimi:

function getPositive(arr: number[]): string {
    return arr
        .filter((num: number) => num > 0)
        .join(''); 

}

const result1 = getPositive([0, -4, 2]);
console.log(result1);

const result2 = getPositive([1, -3, 9]);
console.log(result2);

const result3 = getPositive([1, -7, 5]);
console.log(result3);

const result4 = getPositive([7, -2, -5]);
console.log(result4);

const result5 = getPositive([-1, 0, 9]);
console.log(result5);

const result6 = getPositive([1, 0, 3]);
console.log(result6);

const result7 = getPositive([0, -3, 6]);
console.log(result7);

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