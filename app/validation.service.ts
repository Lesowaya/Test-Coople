import { Injectable } from "@angular/core";
import {Validators} from "@angular/forms";

@Injectable()
export class ValidationService {

    validateEmail(value: string): boolean {
        const emailPattern =/^[_A-Za-z0-9-\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(.)*(\.[A-Za-z]{2,})/;
        return emailPattern.test(value);
    }

    validateName(value: string): boolean {
        const emailPattern =/^[A-Za-z+]+( )[A-Za-z+]+/;
        return emailPattern.test(value);
    }

}
