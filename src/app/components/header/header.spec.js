import angular from 'angular';
import 'angular-mocks';
import {header} from './header';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('Header', ['app/components/header/header.html'])
      .component('Header', header);
    angular.mock.module('Header');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<header></header>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
