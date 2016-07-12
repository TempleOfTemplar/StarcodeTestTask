import angular from 'angular';
import 'angular-mocks';
import AboutService from './aboutService';

describe('AboutService service', () => {
  beforeEach(() => {
    angular
      .module('AboutService', [])
      .service('AboutService', AboutService);
    angular.mock.module('AboutService');
  });

  it('should', angular.mock.inject(AboutService => {
    expect(AboutService.getData()).toEqual(3);
  }));
});
