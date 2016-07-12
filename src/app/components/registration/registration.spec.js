import angular from 'angular';
import 'angular-mocks';
import {registration} from './registration';

describe('registration component', () => {
  beforeEach(() => {
    angular
      .module('registration', ['app/components/registration/registration.html'])
      .component('registration', registration);
    angular.mock.module('registration');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<registration></registration>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
