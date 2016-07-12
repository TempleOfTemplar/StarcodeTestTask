/*
 Компонент - вывод прогноза погоды для конкретного города.
 Используется WeatherListComponent для отображдения погоды в городах.
 */

class WeatherItemController {

    //вызывает функцию (onRemove), переданную компонентом-родителем
    handleRemove(id) {
        this.onRemove({id});
    }
}

export const WeatherItem = {
    templateUrl: 'app/components/weather-item/weather-item.html',
    controller: WeatherItemController,
    bindings: {
        data: '<',
        onRemove: '&'
    }
};

