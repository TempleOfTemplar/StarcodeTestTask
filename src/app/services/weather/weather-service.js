/*
 Сервис для работы с API http://openweathermap.org/api
*/


export class WeatherService {
    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
        this.path = 'http://api.openweathermap.org/data/2.5/';
        this.appid = 'f81b8ecb79828c9703f3c12a425dbed2';
    }

    /**
     * получает ID города по названию
     *
     * @param {string} cityName Название искомого города
     * @param {object} timeoutPromise объект, используемый компонентом angucomplete-alt
     * @return {promise} then() => ID города
     */
    getCityIdByName(cityName, timeoutPromise) {
        return this.$http.get(this.path + 'find', {
                params: {q: cityName, type: 'like', lang: 'ru', sort: 'population', cnt: '30', APPID: this.appid},
                timeout: timeoutPromise
            }
        );
    }

    /**
     * получает погоду на текущий день в указанных городах
     *
     * @param {array} cities_ids Массив ID городов
     * @return {promise} then() => Объект, содержащий Прогноз погоды. http://openweathermap.org/current
     */
    getWeatherForToday(cities_ids) {
        return this.$http.get(this.path + 'group', {
            params: {id: cities_ids.join(), lang: 'ru', units: 'metric', APPID: this.appid}
        });
    }

    /**
     * получает ID города по названию
     *
     * @param {number} city_id ID города
     * @param {number} days Количество дней, на которые нужно получить прогноз погоды
     * @return {promise} then() => Объект, содержащий Прогноз погоды. http://openweathermap.org/forecast16
     */
    getWeatherForecast(city_id, days) {
            return this.$http.get(this.path + 'forecast/daily', {
                params: {id: city_id, cnt:days, lang: 'ru', units: 'metric', APPID: this.appid}
            });
    }

}

