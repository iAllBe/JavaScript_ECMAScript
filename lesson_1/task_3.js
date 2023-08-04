// 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:

const factorial = (numb) => {
    if (numb === 1) {
        return numb;
    } else {
        return numb * factorial(numb - 1);
    }
}

console.log(factorial(5));