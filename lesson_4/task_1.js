// Задача
// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const usersURL = 'https://jsonplaceholder.typicode.com/users';

const div = document.querySelector('.wrapper');

const getData3 = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

// console.log(getData3(nasaURL));

try {
    const data = await getData3(usersURL);
    data.forEach((element) => {
        div.insertAdjacentHTML(
            'beforeend',
            `
				<div id="${element['id']}">${element['id']} ${element['name']}</div>
                <button>Удалить</button>
		`
        );
    });

    const btns = document.querySelectorAll('button');
    console.log(btns);
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let parent = document.getElementById("wrapper");
            let child = document.getElementById("1");
            parent.removeChild(child);
        });
    });
} catch (error) {
    console.error('Что-то пошло не так!');
}