import angular from 'angular';
import 'angular-mocks';
import {WeatherItem} from './WeatherItem';

describe('WeatherItem component', () => {
  beforeEach(() => {
    angular
      .module('WeatherItem', ['app/components/WeatherItem/WeatherItem.html'])
      .component('WeatherItem', WeatherItem);
    angular.mock.module('WeatherItem');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<WeatherItem></WeatherItem>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
