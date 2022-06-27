let toDay = new Date();
console.log(toDay.toLocaleString())
console.log(toDay.getDate())
console.log(toDay.getFullYear())
console.log(toDay.getHours())
console.log(toDay.getMinutes())
console.log(toDay.getMilliseconds())

// Return Previous Date Time
let previousDay = toDay.setDate(toDay.getDate() - 3);
console.log(new Date(previousDay))

// Write a program to calculate date between two days
let date_01 = new Date("02/Feb/2022")
let date_02 = new Date("03/Feb/2022")

let time_diff = Math.abs(date_01.getTime() - date_02.getTime());
var days_diff = time_diff / (1000 * 60 * 60 * 24);
console.log(days_diff)