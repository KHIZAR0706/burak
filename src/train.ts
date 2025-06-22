// G-TASK
// Masalani izohi: Yagona parametrga ega function tuzing.Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.
// Masalan: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 soniniYuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

// Masalani yechimi:

function getHighestIndex(arr: number[]): number {
    let max: number = arr[0];
    let index: number = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }

    return index;
}

const result1 = getHighestIndex([5, 21, 12, 21, 8]);
console.log(result1); 

const result2 = getHighestIndex([9, 10, 7, 10, 6]);
console.log(result2); 

const result3 = getHighestIndex([13, 27, 7, 19, 12]);
console.log(result3); 

const result4 = getHighestIndex([99, 100, 75, 98, 66]);
console.log(result4); 