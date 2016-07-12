import angular from 'angular';
import 'angular-mocks';
import {about} from './about';

describe('about component', () => {
  beforeEach(() => {
    angular
      .module('about', ['app/components/about/about.html'])
      .component('about', about);
    angular.mock.module('about');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<about></about>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
