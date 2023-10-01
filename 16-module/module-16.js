const moment = require('moment');

function formatDate(date, format = 'YYYY-MM-DD') {
    return moment(date).format(format);
}

console.log(formatDate(new Date()))
// функция для добавления дней к дате;
function addDays(date, days) {
    return moment(date).add(days, 'days').toDate();
}


// экспорт функции;
module.exports = {
    formatDate,
    addDays,
};

console.log(addDays('2022-08-12', 1));
console.log(formatDate(new Date()));




