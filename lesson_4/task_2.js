// Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const dogsURL = 'https://dog.ceo/api/breeds/image/random';

const div = document.querySelector('.wrapper');

const getData3 = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

console.log(getData3(dogsURL));

try {
    const data = await getData3(dogsURL);
    data.forEach((element) => {
        div.insertAdjacentHTML(
            'beforeend',
            `
				<figure>
 					<img src="${element.message}" alt="pic" />
  				<figcaption>Собака!</figcaption>
					<button>Удалить</button>
				</figure>

		`
        );
    });

    const btns = document.querySelectorAll('button');
    console.log(btns);
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            console.log('Клик');
        });
    });
} catch (error) {
    console.error('Что-то пошло не так!');
}