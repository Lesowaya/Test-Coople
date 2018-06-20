import {Component} from "@angular/core";
import {ValidationService} from "~/validation.service";


@Component({
    selector: "ns-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent {

    constructor(private validationService: ValidationService) {}

    public email: string = '';
    public password: string = '';
    public isFormValid: boolean = false;

    public updateFormValid(): void {
        setTimeout(()=>{
            this.isFormValid = this.password.length > 5 && this.validationService.validateEmail(this.email);
        }, 250);
    }
}