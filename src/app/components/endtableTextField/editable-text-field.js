/*
 Компонент - редактируемую текстовое поле
*/

class EditableTextFieldController {
    constructor($window, $timeout) {
        this.editing = this.editing || false;
        this.text = this.text || '';
        this.$window = $window;
        this.$timeout = $timeout;
    }

    //делает поле ввода доступным для редактирования, переключает в него фокус
    switchEditable() {
        this.editing = !this.editing;

        this.$timeout(() => {
            const element = this.$window.document.querySelector('.form-control.current-edit');
            if (element) {
                element.focus();
            }
        }, 0);
    }

    handleSubmit() {
        this.onSave({text: this.text});
        this.editing = !this.editing;
    }

}

export const EditableTextField = {
    templateUrl: 'app/components/endtableTextField/editable-text-field.html',
    controller: EditableTextFieldController,
    bindings: {
        onSave: '&',
        text: '<'
    }
};




