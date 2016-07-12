export class AboutService {
    /*@ngInject*/
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.path = 'app/about.json';
    }

    getText() {
        var aboutText = JSON.parse(localStorage.getItem("aboutText"));
        if (aboutText == null) {
            return this.$http.get(this.path);
        } else {
            return this.$q(function (resolve) {
                resolve({data: aboutText});
            });
        }
    }

    saveText(text) {
            localStorage.setItem("aboutText", JSON.stringify([{about: text}]));
    }

}

