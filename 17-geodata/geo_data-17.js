
const addressInput = document.getElementById('addressInput');
const suggestionsList = document.getElementById('suggestions');

addressInput.addEventListener('input', debounce(searchAddress, 300));

function debounce(func, delay) {
    let timerId;
    return function () {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}

function searchAddress() {
    const query = addressInput.value;
    if (query.length < 3) {
        suggestionsList.style.display = 'none';
        return;
    }

    // выполнение запроса к API Яндекс;
    fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${query}&apikey=9b4850f0-5834-4382-baa5-bd69765cae61`)
        .then(response => response.json())
        .then(data => {
            const suggestions = data.response.GeoObjectCollection.featureMember.map(item => item.GeoObject.name);
            displaySuggestions(suggestions);
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
}

// отображение результатов
function displaySuggestions(suggestions) {
    suggestionsList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.addEventListener('click', () => {
            addressInput.value = suggestion;
            suggestionsList.style.display = 'none';
        });
        suggestionsList.appendChild(li);
    });
    suggestionsList.style.display = 'block';
}

