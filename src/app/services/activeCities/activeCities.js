/*
 Сервис для работы с массивом активных городов
*/

export class ActiveCitiesService {

    getCities() {
        //todo вынести defaultCities в константу
        this.defaultCities = ['5601538', '4171563'];
        this.activeCities = JSON.parse(localStorage.getItem("activeCities"));
        if (this.activeCities == null) {
            this.activeCities = this.defaultCities;
        }
        return this.activeCities;
    }

    /**
     * добавляет город в массив городов
     *
     * @param {number} id ID города, который необходимо добавить
     * @param {array} cities исходный массив городов
     * @return {array} массив городов с добавленным ID
     */
    addCity(id, cities) {
        if(cities.indexOf(id) == -1) {
            cities.push(id);
            localStorage.setItem("activeCities", JSON.stringify(cities));
        }
        return cities;
    }

    /**
     * удаляети город из массива
     *
     * @param {number} id ID города, который необходимо удалить
     * @param {array} cities исходный массив городов
     * @return {array} массив городов с удаленным ID
     */
    removeCity(id, cities) {
        cities = cities.filter(city_id => city_id != id);
        localStorage.setItem("activeCities", JSON.stringify(cities));
        return cities;
    }
}