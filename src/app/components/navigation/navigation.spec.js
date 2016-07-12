import angular from 'angular';
import 'angular-mocks';
import {navigation} from './navigation';

describe('navigation component', () => {
  beforeEach(() => {
    angular
      .module('navigation', ['app/components/navigation/navigation.html'])
      .component('navigation', navigation);
    angular.mock.module('navigation');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<navigation></navigation>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
