export default appConfig;


appConfig.$inject = ['pikadayConfigProvider'];

/** @ngInject */
function appConfig(pikaday) {
    //конфигурация компонента pikaday-angular
    var mindate = new Date(), maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 16);

    pikaday.setConfig({
        firstDay: 1,
        setDefaultDate: true,
        defaultDate: new Date(),
        keepFieldBlank : false,
        minDate: mindate,
        maxDate: maxDate,
        i18n: {
            previousMonth: 'Предидущий месяц',
            nextMonth: 'Следующий месяц',
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            noon: 'Полдень',
            midnight: 'Полночь',
            clear: 'Очистить',
            today: 'Сегодня'
        }
    });
}
