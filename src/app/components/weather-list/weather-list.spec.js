import angular from 'angular';
import 'angular-mocks';
import {WeatherList} from './weather-list';

describe('WeatherList component', () => {
  beforeEach(() => {
    angular
      .module('WeatherList', ['app/components/weather-list/weather-list.html'])
      .component('WeatherList', WeatherList);
    angular.mock.module('WeatherList');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<weather-list></weather-list>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
