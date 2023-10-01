// const serviceKey = 'pjwpcnAMJW1mqFlnOqN0';
// const serviceToken = '220e9fee220e9fee220e9feee1211b551f2220e220e9fee47184d64237af57ea6d50fe9';
const accessToken = '220e9fee220e9fee220e9feee1211b551f2220e220e9fee47184d64237af57ea6d50fe9';
const groupId = 222565930;

const apiUrl = `https://api.vk.com/method/wall.get?owner_id=-${groupId}&count=10&access_token=${accessToken}&v=5.131`;

const postsList = document.querySelector('#posts-list');
const loadMoreButton = document.querySelector('#load-more');
const container = document.querySelector('#vk-widget');

let offset = 0;

const server = 'http://localhost:3000/get-vk-posts';

// реализация загрузки постов при скролле;
container.addEventListener('scroll', async function () {
    if (
        Math.floor(container.scrollHeight - container.scrollTop) === container.clientHeight ||
        Math.ceil(container.scrollHeight - container.scrollTop) === container.clientHeight
    ) {
        offset += 10;
        const newPosts = await loadPosts();
        if (newPosts.length > 0) {
            cachePosts(newPosts);
            displayPosts(newPosts);
        }
    }
});


// кнопка для загрузки дополнительных постов;
loadMoreButton.addEventListener('click', () => {
    loadPosts();
});


// функция загрузки постов
function loadPosts() {
    return fetch(server + `?offset=${offset}`)
        .then((response) => response.json())
        .then((data) => {
            const posts = data.response.items;

            if (posts.length > 0) {
                offset += posts.length;
                return posts;
            } else {
                loadMoreButton.style.display = 'none';
                return [];
            }
        })
        .catch((error) => {
            console.error('Error fetching posts:', error);
            return [];
        });
}

loadPosts();


// функция отображения постов;
function displayPosts(posts) {
    posts.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        // отображение текста постов;
        const postText = document.createElement('p');
        postText.className = 'text';
        postText.textContent = post.text || '';
        postElement.appendChild(postText);

        // отображение даты постов;
        const postDate = document.createElement('p');
        postDate.textContent = new Date(post.date * 1000).toLocaleString(); // переводим приходящее значение ключа date в читаемое нам значение;
        postElement.appendChild(postDate);

        // аппендируем postElement к postsList;
        postsList.appendChild(postElement);
    });
}

// функция кэширования постов при загрузке новых;
function cachePosts(posts) {
    const cachedPosts = JSON.parse(localStorage.getItem('cachedPosts')) || [];
    const maxCacheSize = 100;

    // убераем старые посты, если кэш переполнен
    if (cachedPosts.length + posts.length > maxCacheSize) {
        const excessCount = cachedPosts.length + posts.length - maxCacheSize;
        cachedPosts.splice(0, excessCount);
    }
    // добавляем новые посты в кэш
    cachedPosts.push(...posts);
    localStorage.setItem('cachedPosts', JSON.stringify(cachedPosts));
}

// функция загрузки кэшированных постов;
function loadCachedPosts() {
    // const cachedPosts = JSON.parse(localStorage.getItem('cachedPosts')) || [];
    // displayPosts(cachedPosts);
    const cachedPosts = JSON.parse(localStorage.getItem('cachedPosts')) || [];
    cachedPosts.forEach((post) => {

        const postElement = document.createElement('div');
        postElement.className = 'post';

        const postText = document.createElement('p');
        postText.textContent = post.text || '';
        postElement.appendChild(postText);

        const postDate = document.createElement('p');
        postDate.textContent = post.date || '';
        postElement.appendChild(postDate);

        // добавляем пост в список постов
        postsList.appendChild(postElement);
    });
}

loadCachedPosts();

function calculateLocalStorageUsage() {
    const maxLocalStorageSize = 5 * 1024 * 1024;
    const usedLocalStorage = JSON.stringify(localStorage).length * 2;

    console.log(`использовано: ${usedLocalStorage} байт`);
    console.log(`максимальная вместимость: ${maxLocalStorageSize} байт`);
}


calculateLocalStorageUsage();

window.addEventListener('storage', (event) => {
    if (event.storageArea === localStorage) {
        console.log('localStorage .');
        calculateLocalStorageUsage();
    }
});


