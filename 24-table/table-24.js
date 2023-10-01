const dataTable = document.getElementById("data-table");
const tableBody = document.getElementById("table-body");
const pagination = document.getElementById("pagination");

const itemsPerPage = 50; // кол элементо на одной стр;
let currentPage = 1;
let data = [];


// получаем данные с сервера;
fetch("http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true")
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData; // сохраняем эти данныев переменной;
        renderTable(currentPage); // и вызываем функцию для отображения;
    });

function renderTable(page) {
    tableBody.innerHTML = "";
    currentPage = page;

    const startIndex = (page - 1) * itemsPerPage; // начальный индекс для текущей стр;
    const endIndex = startIndex + itemsPerPage;   // конечный индекс для текущей стр;
    const paginatedData = data.slice(startIndex, endIndex); // отбор данных для текущей стр;

    paginatedData.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>${item.tel}</td>
            <td>${item.address}</td>
            <td>${item.city}</td>
            <td>${item.state}</td>
            <td>${item.zip}</td>
        `;
        tableBody.appendChild(row);
    });

    renderPagination();
}

// функция для отображения пагинации;
function renderPagination() {
    pagination.innerHTML = "";
    const totalPages = Math.ceil(data.length / itemsPerPage) // получаем общее кол. страниц;

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.innerText = i;
        pageButton.addEventListener("click", () => renderTable(i)) // обработчик для переключения стр.;
        if (i === currentPage) {
            pageButton.classList.add("active");
        }
        pagination.appendChild(pageButton);
    }
}

// обработчик сортировки;
dataTable.addEventListener("click", (e) => {
    if (e.target.tagName === "TH" && e.target.getAttribute("data-sortable") === "true") {
        const column = e.target.getAttribute("data-column");
        // для сортировки используем метод sort;
        data.sort((a, b) => {
            if (a[column] < b[column]) return -1;
            if (a[column] > b[column]) return 1;
            return 0;
        });
        renderTable(currentPage);
    }
});

