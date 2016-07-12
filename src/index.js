import angular from 'angular';

import {WeatherService} from './app/services/weather/weather-service';
import {ActiveCitiesService} from './app/services/activeCities/activeCities';
import {AboutService} from './app/services/about/about';
import {App} from './app/containers/App';

import {Navigation} from './app/components/navigation/navigation';

import {Header} from './app/components/header/header';
import {WeatherItem} from './app/components/weather-item/weather-item';
import {WeatherList} from './app/components/weather-list/weather-list';
import {Registration} from './app/components/registration/registration';
import {About} from './app/components/about/about';
import {EditableTextField} from './app/components/endtableTextField/editable-text-field';

import 'angular-ui-router';
import 'pikaday-angular';
import 'angucomplete-alt';
import routesConfig from './routes';
import appConfig from './config';

import './index.scss';

angular
    .module('app', ['ui.router', 'pikaday', 'angucomplete-alt'])
    .config(routesConfig)
    .config(appConfig)

    .service('weatherService', WeatherService)
    .service('activeCitiesService', ActiveCitiesService)
    .service('aboutService', AboutService)

    .component('app', App)
    .component('navigationComponent', Navigation)
    .component('headerComponent', Header)
    .component('weatherItemComponent', WeatherItem)
    .component('weatherListComponent', WeatherList)
    .component('registrationComponent', Registration)
    .component('aboutComponent', About)
    .component('editableTextField', EditableTextField);
