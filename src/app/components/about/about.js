class AboutController {
    /*@ngInject*/
    constructor(aboutService) {
        this.aboutService = aboutService;
        this.aboutService.getText().then(result => this.text = result.data[0].about);
    }

    handleSave(text) {
        this.todos = this.aboutService.saveText(text);
    }

}

export const About = {
    templateUrl: 'app/components/about/about.html',
    controller: AboutController
};

