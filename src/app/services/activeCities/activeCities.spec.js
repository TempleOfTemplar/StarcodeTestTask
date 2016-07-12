import angular from 'angular';
import 'angular-mocks';
import ActiveCitiesService from './ActiveCitiesService';

describe('ActiveCitiesService service', () => {
  beforeEach(() => {
    angular
      .module('ActiveCitiesService', [])
      .service('ActiveCitiesService', ActiveCitiesService);
    angular.mock.module('ActiveCitiesService');
  });

  it('should', angular.mock.inject(ActiveCitiesService => {
    expect(ActiveCitiesService.getData()).toEqual(3);
  }));
});
