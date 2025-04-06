/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
    MO,
    TU,
    WE,
    TH,
    FR,
    SA,
    SU
}

function isWeekend(day: Days): boolean {
    return day > Days.FR;
}