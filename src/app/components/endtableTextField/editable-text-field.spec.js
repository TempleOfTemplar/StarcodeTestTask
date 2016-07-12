import angular from 'angular';
import 'angular-mocks';
import {EditableTextField} from './EditableTextField';

describe('EditableTextField component', () => {
  beforeEach(() => {
    angular
      .module('EditableTextField', ['app/components/endtableTextField/EditableTextField.html'])
      .component('EditableTextField', EditableTextField);
    angular.mock.module('EditableTextField');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<EditableTextField></EditableTextField>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
