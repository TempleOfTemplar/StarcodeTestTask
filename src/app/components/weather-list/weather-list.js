class WeatherListController {
    /** @ngInject */
    constructor(weatherService, activeCitiesService, $scope) {
        this.weatherService = weatherService;
        this.activeCitiesService = activeCitiesService;
        this.$scope = $scope;
        this.activeCities = this.activeCitiesService.getCities();
        this.getWeather();
    }
    /**
     * возвращает ID города по названию
     *
     * @param {string} city_name Название искомого города
     * @param {object} timeoutPromise используется компоненте angucomplete-alt
     * @return {promise} then()=> ID искомого города
     */
    getCityByName(city_name, timeoutPromise) {
        return this.$parent.$ctrl.weatherService.getCityIdByName(city_name, timeoutPromise);
    }

    addCity() {
        this.activeCitiesService.addCity(this.selectedCity.originalObject.id, this.activeCities);
        this.selectedCity = null;
        this.$scope.$broadcast('angucomplete-alt:clearInput');
        this.getWeather();
    }

    removeCity(id) {
        this.activeCities = this.activeCitiesService.removeCity(id, this.activeCities);
        this.getWeather();
    }

    /**
     * Получает прогноз погоды на выбранную дату
     *
     * @param {object} pikaday объект компонента pikaday
     */
    onPikadaySelect(pikaday) {
        var $this = this;
        var tmp_weatherItems = [];
        var selectedDate = new Date(pikaday.toString());
        var requestedDay = dateDiffInDays(new Date(), selectedDate);
        if (requestedDay > 0) {
            for (var i = 0; i < this.activeCities.length; i++) {
                this.weatherService.getWeatherForecast(this.activeCities[i], requestedDay).then(function (result) {
                    var t = {}, weatherData = result.data;
                    requestedDay = weatherData.list.pop();
                    t.id = weatherData.city.id;
                    t.name = weatherData.city.name;
                    t.main = {};
                    t.main.temp = requestedDay.temp.day;
                    t.main.temp_max = requestedDay.temp.max;
                    t.weather = requestedDay.weather;
                    tmp_weatherItems.push(t);
                });
            }
            $this.weatherItems = tmp_weatherItems;
        } else {
            this.getWeather();
        }

        /**
         * Получает прогноз погоды на выбранную дату
         *
         * @param {object} a javascript Date объект, первая дата для сравнения
         *  @param {object} b a javascript Date объект, вторая дата для сравнения
         * @return {number} разница между датами в днях
         */
        function dateDiffInDays(a, b) {
            var _MS_PER_DAY = 1000 * 60 * 60 * 24;
            // Discard the time and time-zone information.
            var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
            return Math.floor((utc2 - utc1) / _MS_PER_DAY);
        }
    }

    getWeather() {
        this.weatherService.getWeatherForToday(this.activeCities).then(result => this.weatherItems = result.data.list);

    }
}

export const WeatherList = {
    templateUrl: 'app/components/weather-list/weather-list.html',
    controller: WeatherListController
};

