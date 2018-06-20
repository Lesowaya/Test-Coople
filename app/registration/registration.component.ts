import {Component} from "@angular/core";
import {ValidationService} from "~/validation.service";
import {registerElement} from 'nativescript-angular/element-registry';
import {FilterSelect} from 'nativescript-filter-select';

registerElement('FilterSelect', () => FilterSelect);

const genders = [
    {
    'name': 'male',
    'id': 0,
    },
    {
        'name': 'female',
        'id': 1,
    }
];

@Component({
    selector: "ns-registration",
    moduleId: module.id,
    templateUrl: "./registration.component.html",
})
export class RegistrationComponent {

    constructor(private validationService: ValidationService) {
    }

    public email: string = '';
    public password: string = '';
    public passwordConfirm: string = '';
    public name: string = '';
    public gender: any[] = [];
    public genders = genders;
    public isFormValid: boolean = false;

    public updateFormValid(): void {
        setTimeout(() => {
            this.isFormValid = this.password.length > 5 && this.gender.length > 0
                && this.password === this.passwordConfirm
                && this.validationService.validateEmail(this.email) && this.validationService.validateName(this.name);
        }, 250);
    }
}