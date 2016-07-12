/*
 Компонент - навигационное меню с выводом текущей страницы в заголовке
 */

class NavigationController {
    /*@ngInject*/
    constructor($state) {
        this.$state = $state;
        this.menuItems = [
            {
                title: 'Главная',
                route: 'app.weather-list'
            },
            {
                title: 'О сервисе',
                route: 'app.about'
            },
            {
                title: 'Регистрация',
                route: 'app.registration'
            }];

    }
    getCurrentStateTitle() {
        return 'Страница "'+ this.menuItems.find(element => element.route == this.$state.current.name).title+'"';
    }
}

export const Navigation = {
    templateUrl: 'app/components/navigation/navigation.html',
    controller: NavigationController
};

