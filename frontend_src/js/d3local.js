module.exports = function() {
    if(d3) {
        var d3locale = d3.locale({
                decimal: ",",
                thousands: "\xa0",
                grouping: [3],
                currency: ["", " руб."],
                dateTime: "%A, %e %B %Y г. %X",
                date: "%d.%m.%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                shortDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                months: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
                shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
            });

        d3.time.format = d3locale.timeFormat;
    }
};
