// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
    return {
        increment(numb) {
            return ++numb;
        },
        decrement(numb) {
            return --numb;
        }
    }
}

const counter = createCounter();
console.log(counter.increment(2));
console.log(counter.decrement(2));