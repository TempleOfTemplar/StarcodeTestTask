import angular from 'angular';
import 'angular-mocks';
import WeatherService from './weather';

describe('Weather service', () => {
  beforeEach(() => {
    angular
      .module('WeatherService', [])
      .service('WeatherService', WeatherService);
    angular.mock.module('WeatherService');
  });

  it('should', angular.mock.inject(Weather => {
    expect(Weather.getData()).toEqual(3);
  }));
});
