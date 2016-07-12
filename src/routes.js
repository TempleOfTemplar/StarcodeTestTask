export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.when('/', '/registration');
    $urlRouterProvider.otherwise('/registration');

    $stateProvider
        .state('app', {
            url: '/',
            template: '<app></app>'
        })
        .state('app.weather-list', {
            url: 'weather-list',
            template: '<weather-list-component></weather-list-component>'
        })
        .state('app.about', {
            url: 'about',
            template: '<about-component></about-component>'
        })
        .state('app.registration', {
            url: 'registration',
            template: '<registration-component></registration-component>'
        });
}
