/*
 Компонент - форма регистрации пользователя
*/

class RegistrationController {
    constructor() {
        this.text = 'My brand new component!';
    }

    handleSubmit() {
        alert(JSON.stringify(this.user));
    }
}

export const Registration = {
    templateUrl: 'app/components/registration/registration.html',
    controller: RegistrationController
};

